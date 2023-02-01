type Props_Cards = {
    className: string,
}

export function Card_in_Progess(props: Props_Cards){
    return(
        <div className={`card ${props.className}`}>
            {/* <span>In Progress</span> */}

            <div className="ribbon first"><span>In Progress</span></div>
            <div className="ribbon second"><span>In Progress</span></div>
            <div className="ribbon thirth"><span>In Progress</span></div>
            <div className="ribbon fourth"><span>In Progress</span></div>
            <div className="ribbon fifth"><span>In Progress</span></div>
            <div className="ribbon fifth"><span>In Progress</span></div>
            <div className="ribbon sixth"><span>In Progress</span></div>
        </div>        
    )
}

type Props_Card_with_Item = {
    title: string,
    img: string;
    to: string,
};

export function Card_with_Item(props: Props_Card_with_Item & Props_Cards){
    return(
        <a href={props.to} target={'_blank'} className={`card card_w_item ${props.className}`}>
            <img src={props.img} alt="" />
            <div className="grid-title">
                <span>{props.title}</span>
            </div>
        </a>        
    )
}