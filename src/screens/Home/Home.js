import { Component } from "react";

class HomseScreen extends Component{
    constructor(props)
    {
        super(props)
        this.state=
        {
            language:"",
            country:"",
            startDate:"",
            endDate:"",
            news:null,
            loadingText:"Getting Latest News",
            errorText:""
        }
        this.speaks=React.createRef();
        this.handleNewsError=this.handleNewsError.bind(this);
        this.handleNewsClosed=this.handleNewsClosed.bind(this);
        this.handleFilterNews=this.handleFilterNews.bind(this);
        this.handleLatestNews=this.handleLatestNews.bind(this);
        this.handleFilterReset=this.handleFilterReset.bind(this);
        this.handleNewsResponse=this.handleNewsResponse.bind(this);
        this.handleInputFromDate=this.handleInputFromDate.bind(this);
    }
    componentDidMount()
    {
        this.handleLatestNews()
    }
    handleNewsResponse(res)
    {

    }
    handleNewsError()
    {   
        
    }
    handleLatestNews()
    {
        this.setState(
            {
                news:null,
                loadingText:"Getting Latest News"
            },()=>
            {
                getLatestNews().then(this.handleNewsResponse).catch(this.handleNewsError)
            }
        )
    }
    handleFilterNews()
    {

    }
    handleFilterReset()
    {

    }
    handleNewsClosed(index)
    {

    }
    handleInputFromDate(event)
    {

    }
    render()
    {

    }
}
export default HomseScreen;
