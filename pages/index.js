import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://turbologo.com/articles/wp-content/uploads/2019/12/Uber-logo.png.webp"></UberLogo>
          <Profile>
            <Name>Rafeh Qazi</Name>
            <UserImage src="https://img1.pngindir.com/20180715/bkp/kisspng-computer-icons-user-clip-art-uber-logo-transparent-5b4b0088b5bb26.5557128115316419927444.jpg"></UserImage>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uber.png"></ActionButtonImage>
              Ride
            </ActionButton>
          </Link>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"></ActionButtonImage>
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"></ActionButtonImage>
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputArea>Where to?</InputArea>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const ActionButtons = tw.div`
flex
`;
const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-32 items-center flex flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;
const ActionButtonImage = tw.img`
h-3/5
`;
const UberLogo = tw.img`
h-28
`;
const InputArea = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-6 ml-1
`;
const Header = tw.div`
flex justify-between items-center
`;
const Profile = tw.div`
flex items-center
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;
const Name = tw.div`
mr-4 w-20 text-sm
`;
