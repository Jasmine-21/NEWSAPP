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
        const state=this.state;
        return(
            <div className="col app">
                <nav className="header cool">
                    <div className="header-inner row space-btn">
                        <button className="btn-latest" onClick={this.handleLatestNews}>
                            Show Latest News
                        </button>
                    </div>
                </nav>
                <div className="col container">
                    <div className="wrapper row">
                        <div className="col filter-view">
                            <div className="row space-btn filter-header">
                                <div className="filter-title">
                                    Filter News
                                </div>
                                <div className="filter-reset" role="button" onClick={this.handleFilterReset}>
                                    <span>Reset</span>
                                </div>
                                <div className="filter-form col">
                                    <div className="col filter-box">
                                        <span className="input-label">
                                            Language
                                        </span>
                                        <select className="filter-input" value={state.language} onChange={
                                            event=>this.setState
                                            (
                                                {
                                                    language:event.nativeEvent.target.value
                                                }
                                            )
                                        }>
                                            <option value="" disabled hidden>Select</option>
                                            {
                                                Language.map(lang=>
                                                    {
                                                        return(
                                                            <option value={
                                                                lang.code
                                                            } key={lang.code}>{lang.fullName}</option>
                                                        )
                                                    })
                                            }
                                        </select>
                                    </div>
                                    <div className="col filter-box">
                                        <span className="input-label">Country</span>
                                        <select className="filter-input" value={state.country}
                                        onChange={
                                            event=>this.setState(
                                                {
                                                    country:event.nativeEvent.target.value
                                                }
                                            )
                                        }
                                        >

                                            <option value="" disabled hidden>Select</option>
                                            {
                                                Countries.map((country,index)=>
                                                {
                                                    return(
                                                    <option value={country.code} key={index}>{country.fullName}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomseScreen;











