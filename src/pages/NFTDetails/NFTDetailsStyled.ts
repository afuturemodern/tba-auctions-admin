import styled from "styled-components";

export const NFTDetailsContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	gap: 40px;
	margin-top: 150px;
	overflow: hidden;
`;

export const MainNFTImage = styled.img`
	width: 100%;
	height: 40vh;
	border-radius: 40px;
	object-fit: contain;
	// background-color: black;
`;

export const NFTSContainer = styled.div`
	width: 100%;
	border-radius: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	background-color: #fff;
	min-height: 80vh;
`;

export const EachNFTContainer = styled.div`
	width: 40%;
	max-height: 340px;
	aspect-ratio: 1/1.2;
	border: 1px solid gray;
	margin-top: 20px;
	border-radius: 20px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const EachNFTImage = styled.img`
	width: 100%;
	aspect-ratio: 1/1;
	object-fit: cover;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
`;

export const EachNFTText = styled.p`
	font-size: 15px;
	font-weight: 600;
	text-align: center;
	margin-top: 10px;
	font-family: "Roboto Mono", monospace;
`;

export const MainNFTAndButtonsContainer = styled.div`
	width: 40%;
	min-height: 80vh;
	border-radius: 20px;
	object-fit: cover;
`;

export const SmartContractWalletAddressAdmin = styled.p`
	font-size: 16px;
	font-weight: 300;
	margin-top: 0px;
	font-family: "Roboto Mono", monospace;
	max-width: 100%;
	padding-bottom: 40px;
	padding-top: 200px;
`;

export const SmartContractWalletAddress = styled.p`
	font-size: 16px;
	font-weight: 300;
	margin-top: 0px;
	font-family: "Roboto Mono", monospace;
	max-width: 100%;
	padding-bottom: 40px;
	padding-top: 20px;
`;

export const ButtonsContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const ActionButton = styled.button`
	width: 30%;
	height: 50px;
	background-color: #fff;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	border: none;
	border-radius: 5px;
	font-size: 20px;
	font-weight: 600;
	margin-left: 2%;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		color: #373737;
		box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
	}
`;

export const LinkContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

export const NftsOfMainNftContainer = styled(NFTSContainer)`
	flex-direction: column;
	width: 40%;
`;

export const NftsHeadText = styled.p`
	background-color: black;
	height: 60px;
	color: white;
	margin: 0px;
	padding-top: 16px;
	text-align: center;
	font-size: 22px;
	font-weight: 700;
	font-family: "Montserrat", sans-serif;
`;

export const NftsDescriptionText = styled.p`
	// background-color: black;
	// height: 60px;
	color: black;
	margin: 0px;
	padding-top: 16px;
	padding-left: 20px;
	padding-right: 20px;
	text-align: start;

	font-size: 16px;
	font-weight: 700;
	font-family: "Montserrat", sans-serif;
`;

const CountdownInfoText = styled.p`
	background-color: black;
	height: 60px;
	color: white;
	margin: 0px;
	padding-top: 16px;
	text-align: center;
	font-size: 18px;
	font-weight: 500;
	font-family: "Montserrat", sans-serif;
`;

export const MainNFTHeadText = styled(NftsHeadText)`
	background-color: black;

	margin-left: 24%;
	margin-right: 24%;
	font-size: 1rem;
	font-weight: 600;
	height: 60px;
	padding-bottom: 16px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`;

const LastBidsContainer = styled.div`
	width: 100%;
	height: 30vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	overflow-y: scroll;
	align-items: center;
	padding: 40px 0px;
`;

const EachBid = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #373737;
	border-radius: 10px;
	padding: 10px 20px;
	margin-top: 12px;
`;

const EachBidNameText = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #373737;
`;

export const InfoMessageText = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #373737;
	margin-top: 46px;
	padding: 10px 20px;
	text-align: end;
`;

const EachBidImage = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const EachBidAvatarNameContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

const NFTSDescription = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #373737;
	margin-top: 10px;
	padding: 10px 20px;
`;

const AlreadyInAuctionText = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #373737;
	margin-top: 10px;
	padding: 10px 20px;
	text-align: center;
`;

const OpenseaLogo = styled.img`
	width: 80px;
	height: 80px;
	object-fit: contain;
`;

const OpenseaLogoMiddle = styled.img`
	width: 40px;
	height: 40px;
	object-fit: contain;
`;

export {
	LastBidsContainer,
	EachBid,
	EachBidNameText,
	EachBidImage,
	EachBidAvatarNameContainer,
	NFTSDescription,
	AlreadyInAuctionText,
	OpenseaLogo,
	OpenseaLogoMiddle,
	CountdownInfoText,
};
