import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form";
import { StyledLink } from "../components/StyledLink";
import useSWR from "swr";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  const router = useRouter();

  async function handleAddPlace(place) {
    const response = fetch("/api/places/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(place),
    });
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <StyledBackLink href="/">back</StyledBackLink>
      <Form onSubmit={handleAddPlace} formName={"add-place"} />
    </>
  );
}
