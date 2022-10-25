import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="bg-heading-text">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col sm:text-center sm:mb-0">
                            <div className="max-w-xl md:mx-auto text-center lg:max-w-2xl">
                                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                    Blog
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:container px-5 py-10 lg:py-16'>
                <div className="grid gap-5 mb-8 grid-cols-1 md:grid-cols-2">
                    <div className="p-5 duration-300 transform bg-white rounded hover:-translate-y-2 ">
                        <h6 className="mb-4 font-semibold leading-5 text-xl md:text-2xl text-heading-text">What is cors?</h6>
                        <p className="text-base text-body-text mb-3 leading-7">
                            Use CORS to allow cross-origin access. CORS is a part of HTTP that lets servers specify any other hosts  from which a browser should permit loading of content.ow to block cross-origin access, To prevent cross-origin writes, check an unguessable token in the request — known as a Cross-Site Request Forgery (CSRF) token. prevent cross-origin reads of pages that require this token. To prevent cross-origin reads of a resource, ensure that it is not embeddable. prevent embedding because embedding a resource always leaks some information about it. To prevent cross-origin embeds, ensure that your resource cannot be interpreted Browsers may not respect the Content-Type header. 
                        </p>
                        <p className='text-base text-body-text leading-7'>For example, if you point a <span className='font-bold text-theme-default'>script</span> tag at an HTML document, the browser will try to parse the HTML as JavaScript. When your resource is not an entry point to your site, you can also use a CSRF token to prevent embedding.</p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white rounded hover:-translate-y-2">
                        <h6 className="mb-4 font-semibold leading-5 text-xl md:text-2xl text-heading-text">Why are you using firebase? What other options do you have to implement authentication?</h6>
                        <p className="text-base text-body-text mb-3 leading-7">
                            Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. 
                        </p>
                        <p className='text-xl text-heading-text mb-3'>Authentication</p>
                        <ul className='pl-7 list-disc space-y-2 mb-5 text-body-text'>
                            <li>Authentication is used by a server when the server needs to know exactly who is accessing their information or site</li>
                            <li>Authentication is used by a client when the client needs to know that the server is system it claims to be.</li>
                            <li>In authentication, the user or computer has to prove its identity to the server or client.</li>
                            <li>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</li>
                            <li>Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.</li>
                            <li>Authentication does not determine what tasks the individual can do or what files the individual can see. Authentication merely identifies and verifies who the person or system is.</li>
                        </ul>
                        <p className='text-xl text-heading-text mb-3'>Authorization</p>
                        <ul className='pl-7 list-disc space-y-2 text-body-text mb-5'>
                            <li>Authorization is a process by which a server determines if the client has permission to use a resource or access a file.</li>
                            <li>Authorization is usually coupled with authentication so that the server has some concept of who the client is that is requesting access.</li>
                            <li>The type of authentication required for authorization may vary; passwords may be required in some cases but not in others.</li>
                            <li>In some cases, there is no authorization; any user may be use a resource or access a file simply by asking for it. Most of the web pages on the Internet require no authentication or authorization.</li>
                        </ul>
                        <p className='text-xl text-heading-text mb-3'>Encryption</p>
                        <ul className='pl-7 list-disc space-y-2 text-body-text'>
                            <li>Encryption involves the process of transforming data so that it is unreadable by anyone who does not have a decryption key.</li>
                            <li>The Secure Shell (SSH) and Socket Layer (SSL) protocols are usually used in encryption processes. The SSL drives the secure part of "https://" sites used in e-commerce sites (like E-Bay and Amazon.com.)</li>
                            <li>All data in SSL transactions is encrypted between the client (browser) and the server (web server) before the data is transferred between the two.</li>
                            <li>All data in SSH sessions is encrypted between the client and the server when communicating at the shell.</li>
                            <li>By encrypting the data exchanged between the client and server information like social security numbers, credit card numbers, and home addresses can be sent over the Internet with less risk of being intercepted during transit.</li>
                        </ul>
                    </div>
                    <div className="p-5 duration-300 transform bg-white rounded hover:-translate-y-2 ">
                        <h6 className="mb-4 font-semibold leading-5 text-xl md:text-2xl text-heading-text">How does the private route work?</h6>
                        <p className="text-base text-body-text mb-3 leading-7">
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                        </p>
                        <p className='text-base text-body-text leading-7'>If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white rounded hover:-translate-y-2 ">
                        <h6 className="mb-4 font-semibold leading-5 text-xl md:text-2xl text-heading-text">What is Node? How does Node work?</h6>
                        <p className="text-base text-body-text mb-3 leading-7">
                        Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
                        </p>
                        <p className='text-base text-body-text leading-7 mb-3'>Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.</p>
                        <p className='text-base text-body-text leading-7 mb-3'>Node.js = Runtime Environment + JavaScript Library</p>
                        <p className='text-base text-body-text leading-7 mb-3'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        <p className='text-base text-body-text leading-7 mb-3'>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;