webpackJsonp([70830407456377],{357:function(n,a){n.exports={data:{markdownRemark:{id:"/home/gabriele/Mannequin/src/Twig/README.md absPath of file >>> MarkdownRemark",html:'<p>Mannequin Twig is a command line application that you can use to visualize and work on your Twig Templates in the browser. For example, you might use it to work on the templates inside of a Symfony or Silex application.</p>\n<h2 id="quick-start"><a href="#quick-start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quick Start</h2>\n<p>Using <a href="https://getcomposer.org/doc/00-intro.md">Composer</a>, install Mannequin Twig from your project root.  From the command line:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ composer require lastcall/mannequin-twig\n</code></pre>\n      </div>\n<p>Next, create a new <code>.mannequin.php</code> file in your project root.  This file is where you will configure Mannequin.  Inside of that file:</p>\n<p><div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token comment">/**\n * Create a finder to search and list the Twig template files.\n */</span>\n<span class="token variable">$twigTemplates</span> <span class="token operator">=</span> Finder<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">files</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">in</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token punctuation">.</span><span class="token string">\'/templates\'</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">\'*.twig\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$twigExtension</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TwigExtension</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token string">\'finder\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token variable">$twigTemplates</span><span class="token punctuation">,</span>\n    <span class="token string">\'twig_root\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token constant">__DIR__</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/*\n * Create and return the configuration.  Don\'t forget to return it!\n */</span>\n<span class="token keyword">return</span> MannequinConfig<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token comment">// JS and CSS can either be local (relative paths from the root),</span>\n    <span class="token comment">// or remote (absolute URLs)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">setGlobalJs</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.1/js/foundation.min.js\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">setGlobalCss</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.1/css/foundation.css\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token operator">-</span><span class="token operator">></span><span class="token function">addExtension</span><span class="token punctuation">(</span><span class="token variable">$twigExtension</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre>\n      </div></p>\n<p>See all of the <a href="/extensions/twig/configuration/">configuration options</a>, or <a href="https://github.com/LastCallMedia/Mannequin/tree/master/src/Twig/demo">view an example project</a></p>\n<h2 id="setting-up-components"><a href="#setting-up-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setting up Components</h2>\n<p>While the <code>.mannequin.php</code> file tells Mannequin where to find your components, you still need to describe them to Mannequin.  To do that, we use a special YAML formatted comment block at the top of your twig files. For example, to describe a "Card" component living inside of <code>card.html.twig</code>, you would add the following at the top of the file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-twig"><code><span class="token comment">{# @Component\nname: Card\ngroup: Molecule\nsamples:\n    Small:\n        title: I am a small card\n        body: Lorem ipsum...\n        classes: [\'small\']\n#}</span>\n<span class="token other">&lt;div class="</span><span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">classes</span><span class="token operator">|</span><span class="token property">join</span><span class="token punctuation">(</span><span class="token string"><span class="token punctuation">\'</span> <span class="token punctuation">\'</span></span><span class="token punctuation">)</span> <span class="token rd"><span class="token punctuation">}}</span></span></span><span class="token other">">\n  ... \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>\n</code></pre>\n      </div>\n<p>See the full YAML reference <a href="/extensions/twig/components/">here</a></p>\n<h2 id="workflow"><a href="#workflow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Workflow</h2>\n<p>When you\'re ready to begin work on your templates, you can use the following worklow:</p>\n<ol>\n<li>\n<p>Fire up a live development server so you can see your component.  From the command line:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ vendor/bin/mannequin start\n</code></pre>\n      </div>\n</li>\n<li>This will output a URL for the Mannequin UI.  Visit it in your browser.</li>\n<li>In the UI, find the component you want to work on.</li>\n<li>Open the file, and make your changes.</li>\n<li>Reload the UI to see how your changes look.</li>\n</ol>',headings:[{value:"Quick Start",depth:2},{value:"Setting up Components",depth:2},{value:"Workflow",depth:2}],frontmatter:{title:"Twig",description:"Twig extension for the Mannequin template viewer"},fields:{ghEditUrl:"https://github.com/rigoblock/Twig/README.md",extension:"Twig"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/extensions/twig/",menuTitle:"Overview"},frontmatter:{title:"Twig"},id:"/home/gabriele/Mannequin/src/Twig/README.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/twig/components/",menuTitle:"Components"},frontmatter:{title:"Components"},id:"/home/gabriele/Mannequin/src/Twig/docs/components.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/twig/configuration/",menuTitle:"Configuration"},frontmatter:{title:"Configuration"},id:"/home/gabriele/Mannequin/src/Twig/docs/configuration.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/twig/expressions/",menuTitle:"Expressions"},frontmatter:{title:"Expressions"},id:"/home/gabriele/Mannequin/src/Twig/docs/expressions.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/twig/cli/",menuTitle:"CLI"},frontmatter:{title:"CLI"},id:"/home/gabriele/Mannequin/src/Twig/docs/cli.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/twig/support/",menuTitle:"FAQ & Support"},frontmatter:{title:"FAQ & Support"},id:"/home/gabriele/Mannequin/src/Twig/docs/support.md absPath of file >>> MarkdownRemark"}}]}},pathContext:{id:"/home/gabriele/Mannequin/src/Twig/README.md absPath of file >>> MarkdownRemark",extension:"Twig"}}}});
//# sourceMappingURL=path---extensions-twig-41cdecf9bb4e5a6c61fa.js.map