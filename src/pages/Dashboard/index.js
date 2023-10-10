import { useSession} from 'next-auth/react'
import { useEffect, useState} from 'react'

async function getMyInfo(session) {
	
	let res = await fetch(`https://api.intra.42.fr/v2/campus/34/users?access_token=${session.accessToken}`);
	const data = await res.json();
	return data;
}


export default function Dashboard() {
	const { data: session } = useSession();
	const [ mydata, setMydata] = useState([])
	useEffect(()=>{
		session?getMyInfo(session).then((data)=>setMydata(data)):null;
	})
	return(
		
		<div>
			{session? "session authenticated":"session not authenticated. Please login again"}
			Accreditations {mydata.map(data=><div>{data.email}</div>)}
		</div>
	)
}
