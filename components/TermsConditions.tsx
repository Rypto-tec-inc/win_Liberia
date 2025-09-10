"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TermsConditions = () => {
  return (
    <div className=" relative">
      <Popover>
        <PopoverTrigger>TermsConditions</PopoverTrigger>
        <PopoverContent>
          <div className="">
            Terms and Conditions 1. Introduction Welcome to WinLiberia Raffle
            Draw System. By accessing or using our services, you agree to comply
            with and be bound by these Terms and Conditions. 2. Participation By
            entering the Draw, participants agree to provide accurate and
            complete information. Each entry costs 100 LD or 0.5 USD and is
            non-refundable. 3. Draw and Prizes Draws are conducted regularly and
            daily. Winners are selected after the draw period using a random
            algorithm. Winners will be notified via SMS using the phone number
            provided during entry. 4. Payments Payments for entries are
            processed through the MTN mobile money system. Prize money will be
            distributed to winners’ mobile money accounts within 24 hours of the
            draw. 5. Data Usage No personal data is stored permanently. Data is
            used solely for the purpose of conducting the Draw and is deleted
            after each draw. 6. Disqualification We reserve the right to
            disqualify any participant found to be engaging in fraudulent or
            unlawful activities. 7. Limitation of Liability WinLiberia is not
            liable for any technical issues, system failures, or other issues
            beyond our control that may affect the participation or outcome of
            the Draw. 8. Changes to Terms WinLiberia reserves the right to amend
            these Terms and Conditions at any time. Participants will be
            notified of any changes. 9. Contact Information For any questions or
            concerns, please contact us at technical@winliberia.com or call
            0886096161.
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TermsConditions;
