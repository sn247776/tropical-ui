import { baseURL } from "./api";

export async function fetchPropertyInfo(
  listingType: string,
  slug: string
) {
  try {
    const response = await fetch(
      `${baseURL}/listing/${listingType}/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch property");
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export async function fetchInfoByCode(
  code: string
) {
  try {
    const response = await fetch(
      `${baseURL}/code/${code}/`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch property");
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}



export async function fetchBuyList(props:any) {
  try {
    const queryParams = new URLSearchParams();

    Object.entries(props).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, String(value));
      }
    });

    const response = await fetch(
      `${baseURL}/buy?${queryParams.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch property");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export async function fetchRentList(props:any) {
  try {
    const queryParams = new URLSearchParams();

    Object.entries(props).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, String(value));
      }
    });

    const response = await fetch(
      `${baseURL}/rent?${queryParams.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch property");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export async function fetchLeaseList(props:any) {
  try {
    const queryParams = new URLSearchParams();

    Object.entries(props).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, String(value));
      }
    });

    const response = await fetch(
      `${baseURL}/lease?${queryParams.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch property");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}