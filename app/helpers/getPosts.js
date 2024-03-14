import blogData from './blogData';

//A function that returns blog data
//In a live app, this should fetch from the internet
export const getAllPosts=()=>
{
    return blogData;
}
