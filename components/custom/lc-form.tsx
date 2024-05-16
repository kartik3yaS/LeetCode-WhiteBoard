"use client"
 
// import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    id: z.number().int().positive({
      message: "ID must be a positive number.",
    }),
})

export function MyForm() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        // resolver: zodResolver(formSchema),
        defaultValues: {
          id: undefined,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const idValue=values.id;
        router.push(`/problems/${idValue}`);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>ID</FormLabel>
                    <FormControl>
                    <Input placeholder="Enter the problem ID" {...field} />
                    </FormControl>
                    <FormDescription>
                        It will redirect you to the problem.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}