var my_photos = [
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI3319-ba5b67dd',
		locality:'Новорижское ш.',
		district: 'Росинка',
		mkadDistance:'13 км',
		price: '87 000 000 руб',
		area: '6 сот',
		square: '630 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13159-ca4c9017',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13143-ce70be00',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13143-ce70be00',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13143-ce70be00',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13159-ca4c9017',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13143-ce70be00',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13143-ce70be00',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13143-ce70be00',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13159-ca4c9017',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13143-ce70be00',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	},
	{	
		photoUrl:'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI13143-ce70be00',
		locality:'Рублево-Успенское ш.',
		district: 'Подушкино',
		mkadDistance:'10 км',
		price: '$2 500 000',
		area: '3 сот',
		square: '450 м'
	}
];

var Photos = React.createClass({
	render:function(){
		var data = this.props.data;
		var photosTemplate = data.map(function(item, index){
			return(
			<div key={index} className="col-lg-3 col-md-5 col-xs-12 photos">
				<figure>
				<img src={item.photoUrl} />
				<figcaption>
				<p className="photos__location">{item.locality}</p>
				<p className="photos__district">{item.district}, {item.mkadDistance}</p>
				<div className="additionalInform">
					<ul>
						<li className="photos__price">{item.price}</li>
						<li className="photos__area">{item.area}</li>
						<li className="photos__square">{item.square}&sup2;</li>
					</ul>
					
				</div>
				
				</figcaption>
				</figure>
			</div>
			)
		})
		return(
			<div>
				{photosTemplate}
			</div>
			);		
		}
	});

var Paginator = React.createClass({
	render:function(){
		return(
			<nav className="pagination__nav">
				<ul>
					<li><a href="#">&lsaquo;</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">...</a></li>
					<li><a href="#">66</a></li>
					<li><a href="#">&rsaquo;</a></li>

				</ul>
			</nav>
		);
	}
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header><p>Найдено 2106</p></header>
        <div className="row content"><Photos data = {my_photos}/></div>        
        <div className="footer"><Paginator /></div>        
      </div>

    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')

);