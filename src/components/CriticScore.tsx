import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 50 ? 'yellow' : '';
  return (
    <Badge fontSize='14px' paddingX={2} borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
