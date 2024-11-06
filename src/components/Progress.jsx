import Image from 'next/image';

export default function ProgressCircle({ percentage, imageUrl, altText }) {
  const strokeDasharray = 400;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full transform rotate-[-90deg]">
        <circle
          cx="50%"
          cy="50%"
          r="60"
          stroke="#2E3650"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50%"
          cy="50%"
          r="60"
          stroke="#5D43E5"
          strokeWidth="10"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      <div className="relative w-24 h-24 rounded-full overflow-hidden flex items-center justify-center z-10"> 
        <Image src={imageUrl} alt={altText} className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 flex items-end pb-2 justify-center z-20">
        <div className='bg-blueViolet px-3 py-1 mb-6 rounded-2xl text-white z-10 text-sm'>{percentage}%</div>
      </div>

    </div>
  );
}
