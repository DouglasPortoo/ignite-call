import { Form } from "./style";
import { TextInput, Button } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput crossOrigin="" size="sm" prefix="ignite.com/" placeholder="seu usuário" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight/>
      </Button>
    </Form>
  );
}
