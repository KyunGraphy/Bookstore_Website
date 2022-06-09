<h1>Project Report</h1>

<h3>Bookstore Website</h3>

# Members:
- [Tran Van Tien - ITITIU19218](https://www.facebook.com/profile.php?id=100010644854591)
- [Tran Trung Kien - ITITIU19021](https://www.facebook.com/kyun.iam)
- [Hoang Trung Phong - ITITIU19179](https://www.facebook.com/hoang.trungphong.94)

# Table of Contents:
* [Chapter I:Project Description](#project-description)
    * [Project Overview](#project-overview)
    * [The Purpose of the Project](#purpose)
        * [Motivation](#motivation)
        * [Objection](#objection)
        * [Scope](#scope)
* [Chapter II:Technology](#technology)
    * [Section 1: HTML/CSS](#html-css)	
    * [Section 2: MySQL Workbench](#MySQL)
    * [Section 3: JavaScript](#javascript)
    * [Section 4: Node & ExpressJS](#node-expressjs)
* [Chapter III: Requirement Analysis](#requirement-analysis)
    * [Section 1: Functional and Non – Functional requirements](#functional)
    * [Section 2: Risk Register](#risk-register)
    * [Section 3: Resource Requirement](#resource-requirement)
        * [Section 3.1: Hardware Resources](#hardware)
        * [Section 3.2: Software Resources](#software)
        * [Section 3.3: Human Resources](#human)
* [Chapter IV: System Architecture](#system-architecture)
    * [Section 1: Use Case Diagram](#use-case)
    * [Section 2: Use Case Description](#use-case-des)
    * [Section 3: Activity Diagram](#activity)
    * [Section 4: Class Diagram](#class)
    * [Section 5: Sequence Diagram](#sequence)
    * [Section 6: Sequence Diagram overall](#sequence-overall)
* [Chapter V: Implementation](#implementation)
    * [Section 1: Software Processing Model](#model-processing-model)
    * [Section 2: Execution](#execution)
* [Chapter VI: Testing](#testing)
* [Chapter VII: Conclusion](#conclusion)
* [Chapter VIII: References](#references)


<h2 id="project-description">Project Description</h2>
<h3 id="project-overview">Project Overview</h3>

- Personalizing your expertise has become the newest slogan of all school giants. There are many online bookstores like Powell’s, Amazon which were designed using Html. With the intention of making our own bookstores website,  we develop a similar one using NodeJS, MYSQL Workbench.

- Online Book store is an online web application where the customer can purchase books online. In the web browser, the customers can search for a book by its respective categories which based on subject Author, Title, Price, etc., later can add to the shopping cart and finally purchase using credit card transaction. The user can login using his account details or new customers can set up an account very quickly. They should give the details of their name, contact number and shipping address. 

<h3 id="purpose">The Purpose of the Project </h3>
<h4 id="motivation">Motivation</h4>
The motivation to create this project has many sources:
- Interest to develop a good user friendly website with many online transactions
using a database.
- To increase my knowledge horizon in technologies like NodeJS,JS, Handlebars, MySQL Workbench, CSS, HTML.
- To gain good experience in NodeJs before joining an internship.. 
<h4 id="objection">Objection</h4>
The goal is to create an application that will allow you to be apart from standing in line and waiting for a store clerk to eventually check out your products. Online purchases are completed promptly, giving you more time to complete other chores! Furthermore, unlike at a store, courteous customer service experts are accessible 24 hours a day, seven days a week to assist you with locating, purchasing, and delivering your product.
The major goal is to create a bookshop where consumers can come at any time of day from anywhere and examine the available books, pick any of them, and purchase by paying online or by cash on delivery. The administrator will regularly add any new books available to them for sale. The administrator will take books from the reputed publishers and vendors only.
<h4 id="scope">Scope</h4>
-Understand and prepare detailed requirement and specifications
-Prepare high level and detailed design specifications of the system
-Prepare Test Plan and Test cases
-Develop the system and coding
-Perform unit testing, integration and system testing
-Demonstrate a bug free application after suitable modification if needed.
<h3 id="technology">Technology</h3>
<h4 id="html-css">HTML/CSS</h4>
<h5>HTML</h5>
Hypertext Markup Language, or HTML, is the standard markup language for documents designed to be viewed in a web browser. It can be supported by technologies such as Cascading Style Sheets (CSS) and scripting languages ​​such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and convert the documents into multimedia web pages. HTML describes the structure of a website semantically and originally contained information on the appearance of the document. HTML elements are the building blocks of HTML pages. Images and other objects such as interactive forms can be embedded in the rendered page. HTML provides a means of creating structured documents by denoting the structural semantics of text, such as headings, paragraphs, lists, links, quotations, and other elements. HTML elements are separated by tags that are written in angle brackets.
<h5>CSS</h5>
Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in a markup language such as HTML. CSS is a core technology of the World Wide Web, along with HTML and JavaScript. CSS is designed to allow separation between presentation and content, including layout, colors, and fonts.  This separation can improve the accessibility of content; provide greater flexibility and control in the specification of presentation functionality; allow multiple web pages to share formatting by specifying relevant CSS in a separate .css file, reducing complexity and repetition of structural content; and enable caching of .css files to improve page loading speed between pages sharing the file and its formatting.
<h4 id="MySQL">MySQL Workbench</h4>
MySQL Workbench is a software application that is used for configuring, managing, administering, and integrating SQL development. The instrument includes both scripting editors and graphical tools that work with objects and server features.
 In this project, we apply the MySQL Workbench to implement the entities and the relationship between those. All of this supports managing the shopping online system effectively.
<h4 id="javascript">Javascript</h4>
 In this project, we apply the MySQL Workbench to implement the entities and the relationship between those. All of this supports managing the shopping online system effectively.
JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. etc
<h4 id="node-expressjs">Node & ExpressJS</h4>
<h5>Node</h5>
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project.
A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.
Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.
<h5>Express Handlebars</h5>
Handlebars.js is a templating engine similar to the ejs module in node.js, but more powerful and simple to use. It ensures minimum templating and is a logicless engine that keeps the view and the code separated. It can be used with express as the hbs module, available through npm. HandleBars can be used to render web pages to the client side from data on the server-side.
<h3 id="requirement-analysis">Requirement Analysis</h3>
<h4 id="functional">Functional and Non – Functional requirements</h4>
| Req.ID | Requirement Name | Detailed Description | Type |
| ---- | ---- | ---- | ----|
| 001 | Register an account | If the user doesn’t have an account then he will be asked to register| Functional requirement |
| Bob        | Test2              | Toronto |                            







