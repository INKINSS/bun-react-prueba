type Props = {
	message: string;
};

const Alert = ({ message }: Props) => {
	return <div>{message}</div>;
};

export default Alert;
