export default function ProgressBar() {
  const divs = [0, 1, 2, 3];
  const answered = [true, true, false, false];

  return (
    <div className="w-full flex mt-1 items-center h-[1rem]">
      {divs.map((index) => (
        <div
          key={index}
          className={
            answered[index]
              ? 'bg-[#00CFC3] mx-1 w-[23%] h-2/3 rounded-full'
              : 'bg-white mx-1 w-[23%] h-2/3 rounded-full'
          }></div>
      ))}
    </div>
  );
}
