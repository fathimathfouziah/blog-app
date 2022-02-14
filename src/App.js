import Home from './components/home/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Article from './components/articles/Article'
import ArticleList from './components/articles/ArticleList'
import About from './components/about/About'
import Error from './components/error/Error'
import Header from './components/header/Header'
import ArticlePage from './pages/AddArticlePage'
import EditArticle from './components/articles/EditArticle'
import DeleteConfirmation from './components/articles/DeleteConfirmation'
import Login from './Login/Login'
//import HeaderContent from './components/header/HeaderContent'
//import HeaderContentLogin from './components/header/HeaderContentLogin'
import { createContext, useReducer } from 'react'
import { initialState,reducer } from './reducer/UseReducer'
import LogOut from './Login/LogOut'
import Register from './Register/Register'
export const UserContext=createContext()
const Routing=()=>{

    return (
        
                      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/article-list" element={<ArticleList/>}/>
            <Route path="/article/:uniqueid" element={<Article/>}/>
            <Route path="/article/edit/:_id" element={<EditArticle/>}/>
            <Route path="/article/delete/:_id" element={<DeleteConfirmation/>}/>
            <Route path="/addarticle" element={<ArticlePage/>}/>
            <Route path="*" element={<Error/>}/>
            
        </Routes>
        
    

    )
}

const App=()=>{
  const[state,dispatch]  =useReducer(reducer,initialState)
return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
        <Router>
         <Header/>
         <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<LogOut/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/article-list" element={<ArticleList/>}/>
            <Route path="/article/:uniqueid" element={<Article/>}/>
            <Route path="/article/edit/:_id" element={<EditArticle/>}/>
            <Route path="/article/delete/:_id" element={<DeleteConfirmation/>}/>
            <Route path="/addarticle" element={<ArticlePage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<Error/>}/>
            
        </Routes>
        </>
         </Router>
    </UserContext.Provider>
    {/* <Router>
        
        <Header/>
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/article-list" element={<ArticleList/>}/>
            <Route path="/article/:uniqueid" element={<Article/>}/>
            <Route path="/article/edit/:_id" element={<EditArticle/>}/>
            <Route path="/article/delete/:_id" element={<DeleteConfirmation/>}/>
            <Route path="/addarticle" element={<ArticlePage/>}/>
            <Route path="*" element={<Error/>}/>
            
        </Routes>
        </>
    </Router> */}

    
    </>
)
    
}

export default App
