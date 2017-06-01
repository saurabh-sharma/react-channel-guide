
const main = window.onload = (e)=>{
	//ReactDOM.findDOMNode(this)
	const guides = document.querySelector(".guides");
	const shows_header = document.querySelector(".showsWrapper .row ");
	const shows_row = document.querySelectorAll(".guides .show_row");
	const channels = document.querySelector(".channels");

	let header_width = document.querySelector(".showsWrapper .row .header").offsetWidth;
	// shows_row.map((shows_row,index)=>{
	// 	shows_row.style.width = header_width;
	// }) 

	[...shows_row].map((row)=> {
		row.style.width = `${header_width}px`;
	});
	


	const guidesListener = ()=>{
		//Remove Listeners
		channels.removeEventListener("scroll", channelListener);
		shows_header.removeEventListener("scroll", headerListener);

		shows_header.scrollLeft = guides.scrollLeft;
		channels.scrollTop = guides.scrollTop;
	}
	
	const guidesListener_AddCallBacks = _.debounce(()=>{
		channels.addEventListener("scroll", channelListener);
		shows_header.addEventListener("scroll", headerListener);
		console.log("Guide Listener -- Events Added");
		//guides.scrollLeft = shows_header.scrollLeft;
	}, 250);


	const headerListener = ()=>{
		//Remove Listeners
		guides.removeEventListener("scroll", guidesListener);
		//Perform Scroll Operation
		guides.scrollLeft = shows_header.scrollLeft;
	}
	
	const headerListener_AddCallBacks = _.debounce(()=>{
		//Add EventListener on scroll
		guides.addEventListener("scroll", guidesListener);
		console.log("Header Listener -- Events Added");
	}, 250);

	const channelListener = () =>{
		//Remove Listeners
		guides.removeEventListener("scroll", guidesListener);
		guides.scrollTop = channels.scrollTop;
		console.log("channel");
	}

	const channelListener_AddCallBacks = _.debounce(()=>{
		guides.addEventListener("scroll", guidesListener);
		console.log("Channel Listener -- Events Added");
	}, 250);

	guides.addEventListener("scroll", guidesListener_AddCallBacks);
	guides.addEventListener("scroll", guidesListener);
	channels.addEventListener("scroll", channelListener_AddCallBacks);
	channels.addEventListener("scroll", channelListener);
	shows_header.addEventListener("scroll", headerListener_AddCallBacks);
	shows_header.addEventListener("scroll", headerListener);	
}

export default main;
