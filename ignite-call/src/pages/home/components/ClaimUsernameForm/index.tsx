import { Form } from "./style";
import { TextInput, Button } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import {z} from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string()
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>
export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>();

  async function handleClaimUsername(data:ClaimUsernameFormData ){
    console.log(data)
  }

  return (
    <Form as="form">
      <TextInput
        onSubmit={handleSubmit(handleClaimUsername)}
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
  );
}
