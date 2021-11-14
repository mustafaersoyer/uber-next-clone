import React from "react";
import tw from "tailwind-styled-components";

const Search = () => {
  return (
    <Wrapper>
      {/* ButtonContainer */}
      <ButtonContainer>
        <BackButton src="https://img.icons8.com/material-outlined/24/000000/left.png"></BackButton>
      </ButtonContainer>
      {/* InputContainer */}
      <InputContainer>
        <div>
          <InputArea>Enter pickup Location</InputArea>
          <InputArea>Where to?</InputArea>
        </div>
        <PlusButton></PlusButton>
      </InputContainer>

      {/* SAvedplaces */}
      {/* ButtonContainer */}
      {/* ConfirmLocation */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div` bg-gray-200 h-screen`;
const ButtonContainer = tw.div`bg-white px-4`;
const BackButton = tw.img` h-8`;
const InputContainer = tw.div`flex bg-white`;
const PlusButton = tw.div``;
const InputArea = tw.div`bg-gray-200 flex p-2 m-4 text-sm `;
