import React, { useState, useMemo } from 'react';
import { LinkButton, ParagraphText } from './Paragraph.styled';

export default function Paragraph({
  description,
  characterLimit,
}: {
  description: string;
  characterLimit?: number;
}) {
  const CHARACTER_LIMIT_EXCEEDED =
    (characterLimit && description.length > characterLimit) || description.split('\n').length > 1;

  const [expanded, setExpanded] = useState<boolean>(false);
  const toggleExpanded = () => setExpanded(!expanded);

  // truncate the first line of the description
  const shortDescription = useMemo(
    () => `${description.split('\n')[0].slice(0, characterLimit).trim()}...`,
    [description, characterLimit],
  );

  return (
    <div>
      <div
        style={{ maxWidth: '700px', display: 'inline' }} // good line length for reading
      >
        <ParagraphText>
          {!expanded && CHARACTER_LIMIT_EXCEEDED ? shortDescription : description}
        </ParagraphText>
        {CHARACTER_LIMIT_EXCEEDED && (
          <LinkButton
            type="link"
            style={{ padding: 0, paddingBottom: 0, height: 'auto' }}
            onClick={() => toggleExpanded()}
          >
            {expanded ? 'Read less' : 'Read more'}
          </LinkButton>
        )}
      </div>
    </div>
  );
}
