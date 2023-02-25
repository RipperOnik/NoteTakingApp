import React from "react";
import { Badge, Card, Stack } from "react-bootstrap";
import { SimplifiedNote } from "./NoteList";
import { Link } from "react-router-dom";
import "../styles/NoteCard.css";

export default function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className="h-100 text-reset text-decoration-none card"
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">{title}</span>
          <Stack
            gap={1}
            direction="horizontal"
            className="justify-content-center flex-wrap"
          >
            {tags.map((tag) => {
              return (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              );
            })}
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
}