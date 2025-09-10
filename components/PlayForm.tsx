"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const formSchema = z.object({
  number: z.string().min(7, "Enter a valid phone number"),
  currency: z.string().min(1, "Select a currency"),
});

const PlayForm = ({ type }: { type: "daily" | "jackpot" }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: "",
      currency: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted ✅:", values);
  }

  return (
    <div className="flex">
      <div className="w-full max-md:min-w-80 min-w-96">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 md:p-4 shadow-lg"
          >
            <h2 className="text-5xl max-md:text-3xl font-LT font-bold text-center text-white mb-4">
              Play {type === "daily" ? "Daily" : "Jackpot"}
            </h2>

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-Agdasima text-2xl">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="LR"
                      placeholder="Enter your phone number"
                      international
                      withCountryCallingCode
                      value={field.value}
                      onChange={field.onChange}
                      className="w-full rounded-lg text-2xl font-Fast border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 focus:outline-none px-3 py-2"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Currency Select */}
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-Agdasima text-2xl">
                    Select a Currency
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" w-full text-2xl font-Fast bg-white/10 border border-white/20 text-white">
                        <SelectValue placeholder="Choose currency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="100">100.00 LRD</SelectItem>
                      <SelectItem value="0.50">0.50 USD</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-14 bg-transparent hover:bg-[#ffffff18] cursor-pointer border border-white/20 text-white rounded-lg text-4xl font-Agdasima motion-2"
            >
              Play {type === "daily" ? "Daily Giveway" : "Jackpot"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PlayForm;
