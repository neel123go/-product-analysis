import React from 'react';

const Blogs = () => {
    return (
        <div className='px-40'>
            <h2 className='text-3xl mt-10 text-center'>Question Answers</h2>
            <h2 className='mt-10 text-2xl text-left'>What is Context API?</h2>
            <p className='mt-5 text-slate-600'>The Context API is a component structure provided by the React framework, which allows us to easily access data at different levels of the component tree without passing props to every level. This can be the alternative to "prop drilling" or moving props from grandparent to parent to child, and so on. Context is additionally touted as a better, lighter approach to state management using Redux. To create context API is all you need React.createContext(). It returns a consumer and a provider. The provider could be a component that as its name suggests provides the state to its children. it'll hold the "store" and be the parent of all the components that may need that store. Consumer as it so happens could be a component that consumes and uses the state.</p>

            <h2 className='mt-20 text-2xl text-left'>What is Semantic tags?</h2>
            <p className='mt-5 text-slate-600'>HTML Semantic tags are those that have meaningful names which tell about the type of content. HTML5 introduces many semantic elements which make our code more meaningful and make our code more descriptive. It also tells the browser a bit more about what this content is. The semantic HTML tags help the search engines and other user devices to see the importance and context of web content. A page made with semantic elements is much easier to read. It also has greater accessibility. Examples of semantic tags: header, footer, nav and article etc.</p>
        </div>
    );
};

export default Blogs;