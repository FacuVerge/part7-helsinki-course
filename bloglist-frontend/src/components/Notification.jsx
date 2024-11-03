import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

const Notification = () => {
	
	const notification = useSelector(state => state.notification);

	return (
		(notification && 
		<Alert variant="success">      
			{notification}    
		</Alert>  
		)
	);

};

export default Notification;
