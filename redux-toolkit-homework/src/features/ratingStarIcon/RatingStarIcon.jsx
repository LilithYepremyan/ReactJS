const RatingStarIcon = ({ isFill }) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2552 1.80166L14.229 6.03864C14.4302 6.46234 14.823 6.76086 15.2829 6.82827L19.815 7.52159C20.9361 7.69492 21.396 9.06231 20.6007 9.88082L17.2376 13.3474C16.931 13.6652 16.7872 14.1082 16.8639 14.5511L17.6496 19.3755C17.8412 20.5311 16.6244 21.3881 15.5991 20.82L11.6707 18.6437C11.2491 18.4126 10.7413 18.4126 10.3293 18.6437L6.40086 20.82C5.38522 21.3881 4.16837 20.5214 4.35041 19.3755L5.1361 14.5511C5.20317 14.1178 5.06903 13.6652 4.76242 13.3474L1.3993 9.88082C0.604035 9.06231 1.06395 7.69492 2.18499 7.52159L6.71705 6.82827C7.17697 6.76086 7.56981 6.46234 7.77102 6.03864L9.74482 1.80166C10.2431 0.732781 11.7665 0.732781 12.2648 1.80166H12.2552Z"
        fill={isFill ? "orange" : "none"}
        stroke="orange"
        strokeWidth="1.6"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default RatingStarIcon;
