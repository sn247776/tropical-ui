import ContactButton from '@/components/global/buttons/contact-button'
import { VisitButton } from '@/components/global/buttons/visit-button'
import { ShareButton } from './share-button'

function CallToAction({property}:any) {
  return (
          <div className="bg-primary/10 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Interested in this property?</h3>
          <p className="text-muted-foreground">
            Contact us now to schedule a visit or get more information.
          </p>
        </div>
        <div className="flex gap-3">
          <ContactButton propertyCode={property?.propertyCode} />
          <div className='lg:block hidden'> <VisitButton id={property?._id} /> </div>
          <ShareButton propertyCode={property?.propertyCode} />
        </div>
      </div>
  )
}

export default CallToAction