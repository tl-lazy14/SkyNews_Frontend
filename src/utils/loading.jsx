import { HashLoader } from "react-spinners";

export const LoaderComponent = () => {
  return (
    <>
      <HashLoader 
        color="#36d7b7" 
        size={80} 
        speedMultiplier={1.2} 
        cssOverride={{
            margin: 'auto',
            height: '513px',
        }}
      />
    </>
  );
};