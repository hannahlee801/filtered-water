interface WaterBucketProps {
  water: string[];
}

const WaterBucket: React.FC<WaterBucketProps> = ({ water }) => {
  return (
    <div className="result">
      <p>{water.join(" ")}</p>
    </div>
  );
};

export default WaterBucket;
