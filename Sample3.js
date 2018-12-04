// Write JavaScript here and press Ctrl+Enter to execute
//<div className="info">
const Card = (props) => {
	return(
  	<div>
    	<img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block',marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight:'bold'}}>{props.name}.</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

let data = [
	{ name: "Jin Yin",
	avatar_url: "ttps://avatars2.githubusercontent.com/u/3050614?v=4",
  company: "FHGroup",
	},
];

const CardList = (props) => {
	return (
  	<div>
      {props.cards.map(card => <Card {...card} />)}
  	</div>
  );
}


ReactDOM.render(<CardList cards={data} />,mountNode);
