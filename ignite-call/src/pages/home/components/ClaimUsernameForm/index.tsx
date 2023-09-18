import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormAnnotation } from "./style";
import { TextInput, Button, Text } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O usuario precisa ter pelo menos 3 letras" })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: "O usuario pode ter apenas letras e hifens",
    })
    .transform((username) => username.toLowerCase()),
});

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export function ClaimUsernameForm() {
  const { register, handleSubmit, formState:{errors} } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  });

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data);
  }

  return (
    <>
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        crossOrigin=""
        size="sm"
        prefix="ignite.com/"
        placeholder="seu usuário"
        {...register("username")}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    
    </Form>

    <FormAnnotation>
      <Text size='sm'>
      {errors.username? errors.username.message:'Digite um usuário válido'}
      </Text>
    </FormAnnotation>
    </>
  );
}
