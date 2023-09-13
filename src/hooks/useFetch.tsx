import axios from "axios";
import React, { useEffect, useState } from "react";

interface IProps {
	path: string;
}

const useFetch: React.FC<IProps> = ({ path }) => {
	const [data, setdata] = useState("");
	useEffect(() => {
		axios
			.get(`https://tokenbound-accounts-store.vercel.app${path}`)
			.then((res) => {
				setdata(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return data;
};

export default useFetch;
