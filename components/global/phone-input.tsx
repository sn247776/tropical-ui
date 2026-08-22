"use client";

import * as React from "react";
import {
  Check,
  ChevronsUpDown,
} from "lucide-react";

import {
  getCountries,
  getCountryCallingCode,
  CountryCode,
} from "libphonenumber-js";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";

/*
|--------------------------------------------------------------------------
| Props
|--------------------------------------------------------------------------
*/

interface CountryPhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

/*
|--------------------------------------------------------------------------
| Country Type
|--------------------------------------------------------------------------
*/

type CountryOption = {
  code: CountryCode;
  name: string;
  dialCode: string;
};

/*
|--------------------------------------------------------------------------
| Country Names
|--------------------------------------------------------------------------
*/

const countryNames = new Intl.DisplayNames(
  ["en"],
  {
    type: "region",
  }
);

function getCountryName(
  countryCode: CountryCode
) {
  return (
    countryNames.of(countryCode) ||
    countryCode
  );
}

/*
|--------------------------------------------------------------------------
| Countries
|--------------------------------------------------------------------------
*/

const countries: CountryOption[] =
  getCountries()
    .map((code) => ({
      code,
      name: getCountryName(code),
      dialCode: `+${getCountryCallingCode(code)}`,
    }))
    .sort((a, b) =>
      a.name.localeCompare(b.name)
    );

/*
|--------------------------------------------------------------------------
| Default Country
|--------------------------------------------------------------------------
*/

const DEFAULT_COUNTRY: CountryCode = "TH";

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

export default function CountryPhoneInput({
  value = "",
  onChange,
  disabled = false,
  placeholder = "Phone number",
  className,
}: CountryPhoneInputProps) {
  const [open, setOpen] =
    React.useState(false);

  const [country, setCountry] =
    React.useState<CountryCode>(
      DEFAULT_COUNTRY
    );

  const [search, setSearch] =
    React.useState("");

  /*
  |--------------------------------------------------------------------------
  | Selected Country
  |--------------------------------------------------------------------------
  */

  const selectedCountry =
    countries.find(
      (item) => item.code === country
    ) || countries[0];

  /*
  |--------------------------------------------------------------------------
  | Flag URL
  |--------------------------------------------------------------------------
  */

  const getFlagUrl = (
    countryCode: CountryCode
  ) => {
    return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
  };

  /*
  |--------------------------------------------------------------------------
  | Current Dial Code
  |--------------------------------------------------------------------------
  */

  const currentDialCode =
    selectedCountry.dialCode;

  const currentDialCodeDigits =
    currentDialCode.replace(/\D/g, "");

  /*
  |--------------------------------------------------------------------------
  | Filter + Rank Countries
  |--------------------------------------------------------------------------
  */

  const filteredCountries =
    React.useMemo(() => {
      const query =
        search.trim().toLowerCase();

      /*
       * No search.
       *
       * Show all countries alphabetically.
       */
      if (!query) {
        return countries;
      }

      const ranked = countries
        .map((item) => {
          const name =
            item.name.toLowerCase();

          const code =
            item.code.toLowerCase();

          const dialCode =
            item.dialCode.toLowerCase();

          const dialCodeWithoutPlus =
            item.dialCode
              .replace("+", "")
              .toLowerCase();

          let priority = 999;

          /*
           * ----------------------------------------------------------
           * Priority 0
           *
           * Exact ISO country code.
           *
           * IN → India
           * TH → Thailand
           * US → United States
           * ----------------------------------------------------------
           */

          if (code === query) {
            priority = 0;
          }

          /*
           * ----------------------------------------------------------
           * Priority 1
           *
           * Country name starts with search.
           *
           * I → India
           * I → Indonesia
           * I → Iran
           * ----------------------------------------------------------
           */

          else if (
            name.startsWith(query)
          ) {
            priority = 1;
          }

          /*
           * ----------------------------------------------------------
           * Priority 2
           *
           * Country code starts with search.
           * ----------------------------------------------------------
           */

          else if (
            code.startsWith(query)
          ) {
            priority = 2;
          }

          /*
           * ----------------------------------------------------------
           * Priority 3
           *
           * Calling code starts with search.
           *
           * 9 → +91, +92, etc.
           * ----------------------------------------------------------
           */

          else if (
            dialCodeWithoutPlus.startsWith(
              query
            )
          ) {
            priority = 3;
          }

          /*
           * ----------------------------------------------------------
           * Priority 4
           *
           * Search exists somewhere inside
           * the country name.
           *
           * king → United Kingdom
           * stan → Afghanistan
           * ----------------------------------------------------------
           */

          else if (
            name.includes(query)
          ) {
            priority = 4;
          }

          /*
           * ----------------------------------------------------------
           * Priority 5
           *
           * Search exists somewhere inside
           * country code.
           * ----------------------------------------------------------
           */

          else if (
            code.includes(query)
          ) {
            priority = 5;
          }

          /*
           * ----------------------------------------------------------
           * Priority 6
           *
           * Search exists somewhere inside
           * calling code.
           * ----------------------------------------------------------
           */

          else if (
            dialCode.includes(query) ||
            dialCodeWithoutPlus.includes(
              query
            )
          ) {
            priority = 6;
          }

          return {
            item,
            priority,
          };
        })
        .filter(
          ({ priority }) =>
            priority !== 999
        )
        .sort((a, b) => {
          /*
           * First sort by relevance.
           */
          if (
            a.priority !== b.priority
          ) {
            return (
              a.priority - b.priority
            );
          }

          /*
           * Then sort alphabetically
           * within the same priority.
           */
          return a.item.name.localeCompare(
            b.item.name
          );
        });

      return ranked.map(
        ({ item }) => item
      );
    }, [search]);

  /*
  |--------------------------------------------------------------------------
  | Display Phone Number
  |--------------------------------------------------------------------------
  */

  const phoneNumber = React.useMemo(() => {
    if (!value) {
      return "";
    }

    const normalizedValue =
      value.trim();

    /*
     * Example:
     *
     * Backend value:
     *
     * +918535039552
     *
     * Selected country:
     *
     * +91
     *
     * Display:
     *
     * 8535039552
     */
    if (
      normalizedValue.startsWith(
        currentDialCode
      )
    ) {
      return normalizedValue.slice(
        currentDialCode.length
      );
    }

    /*
     * Fallback:
     * Remove all non-numeric characters.
     */
    return normalizedValue.replace(
      /\D/g,
      ""
    );
  }, [
    value,
    currentDialCode,
  ]);

  /*
  |--------------------------------------------------------------------------
  | Country Change
  |--------------------------------------------------------------------------
  */

  const handleCountryChange = (
    newCountry: CountryCode
  ) => {
    const newCountryData =
      countries.find(
        (item) => item.code === newCountry
      );

    if (!newCountryData) {
      return;
    }

    /*
     * Get current phone number
     * without country code.
     */
    const currentNumber =
      phoneNumber.replace(/\D/g, "");

    /*
     * Update country.
     */
    setCountry(newCountry);

    /*
     * Clear search.
     */
    setSearch("");

    /*
     * No phone number yet.
     */
    if (!currentNumber) {
      onChange?.("");
      setOpen(false);
      return;
    }

    /*
     * Store normalized international
     * phone number.
     */
    onChange?.(
      `${newCountryData.dialCode}${currentNumber}`
    );

    setOpen(false);
  };

  /*
  |--------------------------------------------------------------------------
  | Phone Change
  |--------------------------------------------------------------------------
  */

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const rawValue =
      event.target.value.trim();

    /*
     * Empty input.
     */
    if (!rawValue) {
      onChange?.("");
      return;
    }

    /*
     * Remove spaces, brackets,
     * dashes and other characters.
     */
    const digits =
      rawValue.replace(/\D/g, "");

    if (!digits) {
      onChange?.("");
      return;
    }

    let phoneDigits = digits;

    /*
     * --------------------------------------------------------------
     * User entered:
     *
     * +918535039552
     * --------------------------------------------------------------
     */

    if (rawValue.startsWith("+")) {
      if (
        digits.startsWith(
          currentDialCodeDigits
        )
      ) {
        phoneDigits = digits.slice(
          currentDialCodeDigits.length
        );
      }
    }

    /*
     * --------------------------------------------------------------
     * User entered:
     *
     * 00918535039552
     * --------------------------------------------------------------
     */

    else if (
      rawValue.startsWith("00")
    ) {
      const internationalDigits =
        digits.slice(2);

      if (
        internationalDigits.startsWith(
          currentDialCodeDigits
        )
      ) {
        phoneDigits =
          internationalDigits.slice(
            currentDialCodeDigits.length
          );
      } else {
        phoneDigits =
          internationalDigits;
      }
    }

    /*
     * --------------------------------------------------------------
     * Normal local number:
     *
     * 8535039552
     *
     * becomes:
     *
     * +918535039552
     * --------------------------------------------------------------
     */

    onChange?.(
      `${currentDialCode}${phoneDigits}`
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Popover Change
  |--------------------------------------------------------------------------
  */

  const handleOpenChange = (
    nextOpen: boolean
  ) => {
    setOpen(nextOpen);

    /*
     * Clear search when dropdown closes.
     */
    if (!nextOpen) {
      setSearch("");
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <div
      className={cn(
        "relative flex h-12 w-full overflow-hidden",
        "rounded-xl border border-input bg-background",
        "focus-within:ring-1 focus-within:ring-ring",
        className
      )}
    >
      {/* ==============================================================
          COUNTRY SELECTOR
      ============================================================== */}

      <Popover
        open={open}
        onOpenChange={handleOpenChange}
      >
        <PopoverTrigger asChild>
          <button
            type="button"
            disabled={disabled}
            aria-label="Select country"
            className={cn(
              "flex h-full w-[112px] shrink-0",
              "items-center gap-2",
              "border-r border-input",
              "bg-transparent px-3",
              "transition-colors",
              "hover:bg-muted/50",
              "focus:outline-none",
              "disabled:pointer-events-none",
              "disabled:opacity-50"
            )}
          >
            {/* Flag */}
            <img
              src={getFlagUrl(
                selectedCountry.code
              )}
              alt={selectedCountry.name}
              className="h-[18px] w-[27px] shrink-0 rounded-[2px] object-cover"
            />

            {/* Calling Code */}
            <span className="text-sm font-medium">
              {selectedCountry.dialCode}
            </span>

            {/* Dropdown Icon */}
            <ChevronsUpDown className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          </button>
        </PopoverTrigger>

        {/* ==============================================================
            COUNTRY DROPDOWN
        ============================================================== */}

        <PopoverContent
          align="start"
          sideOffset={6}
          className="w-[320px] overflow-hidden p-0"
          onOpenAutoFocus={(event) => {
            /*
             * Prevent Popover from automatically
             * moving focus and scrolling the page.
             */
            event.preventDefault();
          }}
        >
          <Command
            /*
             * Disable cmdk's automatic filtering.
             *
             * We are filtering and ranking countries
             * ourselves.
             */
            shouldFilter={false}
            className="overflow-hidden"
          >
            {/* --------------------------------------------------------
                Search
            --------------------------------------------------------- */}

            <CommandInput
              placeholder="Search country..."
              value={search}
              onValueChange={setSearch}
              autoFocus={false}
            />

            {/* --------------------------------------------------------
                Results
            --------------------------------------------------------- */}

            <CommandList
              className="max-h-[300px] overflow-y-auto"
              style={{
                overscrollBehavior:
                  "contain",
              }}
            >
              {filteredCountries.length ===
              0 ? (
                <CommandEmpty>
                  No country found.
                </CommandEmpty>
              ) : (
                <CommandGroup>
                  {filteredCountries.map(
                    (item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() =>
                          handleCountryChange(
                            item.code
                          )
                        }
                        className={cn(
                          "relative flex w-full",
                          "cursor-pointer",
                          "items-center gap-3",
                          "rounded-sm px-2 py-2",
                          "text-sm",
                          "outline-none",
                          "hover:bg-accent",
                          "hover:text-accent-foreground"
                        )}
                      >
                        {/* Flag */}
                        <img
                          src={getFlagUrl(
                            item.code
                          )}
                          alt={item.name}
                          className="h-[18px] w-[27px] shrink-0 rounded-[2px] object-cover"
                        />

                        {/* Country Name */}
                        <span className="min-w-0 flex-1 truncate text-left">
                          {item.name}
                        </span>

                        {/* Calling Code */}
                        <span className="text-sm text-muted-foreground">
                          {item.dialCode}
                        </span>

                        {/* Selected */}
                        <Check
                          className={cn(
                            "h-4 w-4 shrink-0",
                            country ===
                              item.code
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </button>
                    )
                  )}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* ==============================================================
          PHONE INPUT
      ============================================================== */}

      <Input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        disabled={disabled}
        placeholder={placeholder}
        className={cn(
          "h-full flex-1",
          "rounded-none border-0",
          "bg-transparent",
          "px-4 text-left",
          "shadow-none",
          "focus-visible:ring-0",
          "focus-visible:ring-offset-0"
        )}
      />
    </div>
  );
}