interface EmojiProps {
  rating: number;
}
const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: string } = {
    3: '😐',
    4: '🙂',
    5: '😊'
  };
  return <span>{emojiMap[rating]}</span>;
};

export default Emoji;
