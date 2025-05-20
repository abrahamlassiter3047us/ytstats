const Note = () => {
  return (
    <article className="flex flex-col gap-5 border-t border-primary pt-10 mb-20 lg:text-lg">
      <span className="font-semibold">Data Accuracy Disclaimer :</span>
      <p className="">
        yt-stats is built using the YouTube Data API, which relies on data
        provided by YouTube. Please note that the statistics may not be entirely
        accurate, as the YouTube API always provides rounded numbers.
      </p>
      <span className="font-semibold">Dev Note :</span>
      <p className="">
        This is a fun project to kickstart my journey as a software engineer.
      </p>
    </article>
  );
};

export default Note;
