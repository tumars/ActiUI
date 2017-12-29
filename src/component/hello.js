import React  from 'react'
import style from './app.less'

const Hello = () => (
	<div className={style.hello}>
		<section style={{fontWeight: 'bold', border:'solid 1px #898989', padding: '20px'}}>
			<h2>通知说明： </h2>
			<p>这份组件库是刚学习 react 时写的，代码质量稀烂。。。。</p>
			<p>由于 up 主业务缠身，太忙（懒），这份代码已经一年多未更新，年久失修，文件结构、代码规范、实现方式、语法逻辑等等都已比较落后。各位看看理念就好。up 主日后会抽时从新整理更新。</p>
			<p>这份 <a  href="https://github.com/tumars/boilerplate-webpack-react-es6-cssModule "> https://github.com/tumars/boilerplate-webpack-react-es6-cssModule</a>使用了类似的理念与框架，代码相对较新。各位看官请参考这份。</p>
		</section>
		<section>
			<h2>什么是 ActiUI？ </h2>
			<p>ActiUI 是基于 React 的 web conponent 组件库，包含多个独立的功能性组件，以便前端工程师开发时调取使用。</p>
			<p>ActiUI 目前是个人开发项目，还在不断的完善中，后续会推出更多组件，欢迎各位提 issue 或联系我本人。</p>
			<a className={style.git} href="https://github.com/tumars/ActiUI"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><style type="text/css"></style></defs><path d="M1.3 525.3c0 223 142.9 412.6 342.1 482.2 26.8 6.8 22.7-12.4 22.7-25.4l0-88.5C211.2 911.8 205 809.2 194.5 792.1c-21.1-35.9-70.7-45-55.9-62.1 35.3-18.2 71.2 4.6 112.9 66.1 30.2 44.6 88.8 37.1 118.7 29.6 6.5-26.8 20.5-50.7 39.6-69.4-160.3-28.5-227.3-126.5-227.3-243 0-56.4 18.6-108.4 55.2-150.3-23.2-69.2 2.2-128.2 5.6-137 66.3-6 135.1 47.4 140.5 51.6 37.7-10.1 80.7-15.6 128.8-15.6 48.4 0 91.6 5.6 129.5 15.8 12.9-9.8 76.8-55.6 138.4-50 3.3 8.8 28.1 66.5 6.3 134.7 37 42 55.8 94.3 55.8 151 0 116.7-67.3 214.8-228.2 243.1 26.9 26.5 43.5 63.3 43.5 104l0 128.4c0.9 10.2 0 20.5 17.2 20.5 202.1-68.1 347.6-259.1 347.6-484.1 0-282.1-228.7-510.7-510.7-510.7C229.9 14.6 1.3 243.2 1.3 525.3z"></path></svg>查看源码</a>
		</section>
		<section>
			<h2>ActiUI 的特点？ </h2>
			<ul>
				<li><span>1.</span><span>每个组件相互独立解耦，单个组件所需的全部 js、css、jsx 等在同一文件夹内，按需下载使用即可</span></li>
				<li><span>2.</span><span>样式使用 <code>css module + less</code> 书写</span></li>
				<li><span>3.</span><span>使用 webpack 的构建工作流，<code>react + webpack</code> 的构建环境配置请参考：<a href="https://github.com/tumars/boilerplate-webpack-react-es6-cssModule/">boilerplate-webpack-react-es6-cssModule</a></span></li>
			</ul>
			<p>相对 ant Design、sui、amazeUI 等前端库而言，ActiUI 功能精简，组件分离，冗余代码很少，更容易修改定制。ActiUI 适合有一定 React 基础的前端开发人员。</p>
		</section>
		<section>
			<h2>如何使用？</h2>
			<p>ActiUI 暂未提供 npm 安装，使用时直接下载相应文件夹并在 react 项目里引用组件即可。例如 Spin 组件文件路径为 <code>src -> conponent -> Spin</code>，下载该文件夹后在自己的项目中使用 <code>import Spin from 'Spin'</code> 引入即可使用。</p>
			<p>每个组件包含以下三个文件：</p>
			<ul>
			<li><span>1.</span><span><code>index.js</code>  - 组件主文件，逻辑与界面写在这里</span></li>
			<li><span>2.</span><span><code>{"{组件名}"}.less</code>  - 组件样式文件</span></li>
			<li><span>3.</span><span><code>demo.js</code>  - 组件使用 demo 示例</span></li>
			</ul>
		</section>
		<div className={style.contact}>
			<h4>您可以通过以下方式联系到我：</h4>
			<ul className={style.list}>
				<li>
					<div>Twitter:</div>
					<div><a href="https://twitter.com/Tumars" target="_blank">@Tumars</a></div>
				</li>
				<li>
					<div>GitHub:</div>
					<div><a href="https://github.com/tumars" target="_blank">github.com/tumars</a></div>
				</li>
				<li>
					<div>Email:</div>
					<div>menghui9898@gmail.com</div>
				</li>
				<li>
					<div>Blog:</div>
					<div><a href="http://www.ferecord.com/" target="_blank">www.ferecord.com</a></div>
				</li>
		</ul>
		</div>
	</div>
)

export default Hello