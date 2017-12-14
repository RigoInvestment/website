webpackJsonp([7540436863047],{342:function(n,a){n.exports={data:{markdownRemark:{id:"/home/gabriele/Mannequin/src/Drupal/docs/components.md absPath of file >>> MarkdownRemark",html:'<p>Templates are files that are used to generate HTML markup.  From Mannequin\'s perspective, a template becomes a component when:</p>\n<ol>\n<li>You tell a Mannequin where to find it using <code>.mannequin.php</code>.</li>\n<li>It is enriched with YAML metadata describing the component.</li>\n</ol>\n<p>Here is an example metadata block that describes a component called "Button" that lives in <code>button.html.twig</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-twig"><code><span class="token comment">{# button.html.twig #}</span>\n<span class="token comment">{# @Component\nname: Button\ndescription: This button can be used in...\nsamples:\n  Large:\n    classes: [\'large\']\n    text: I am a Large button\n  Small:\n    classes: [\'small\']\n    text: I am a small button\n#}</span>\n<span class="token other">&lt;a class="button</span> <span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">classes</span><span class="token operator">|</span><span class="token property">join</span><span class="token punctuation">(</span><span class="token string"><span class="token punctuation">\'</span> <span class="token punctuation">\'</span></span><span class="token punctuation">)</span> <span class="token rd"><span class="token punctuation">}}</span></span></span><span class="token other">"></span>\n    <span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span><span class="token property">text</span><span class="token rd"><span class="token punctuation">}}</span></span></span>\n<span class="token other"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>\n</code></pre>\n      </div>\n<div class="note">\nYou must always add the @Component annotation to your Twig comments to have them picked up by Mannequin.\n</div>\n<h2 id="name"><a href="#name" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>name</h2>\n<p>Specifies the display name of the component wherever it\'s shown in Mannequin.</p>\n<div class="gatsby-highlight">\n      <pre class="language-twig"><code><span class="token comment">{# @Component\nname: Button\n#}</span>\n</code></pre>\n      </div>\n<h2 id="description"><a href="#description" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>description</h2>\n<p>Specifies the long text description for the component. This is used to provide additional information about it in the Mannequin UI.</p>\n<div class="gatsby-highlight">\n      <pre class="language-twig"><code><span class="token comment">{# @Component\ndescription: This button can be used in...\n#}</span>\n</code></pre>\n      </div>\n<h2 id="group"><a href="#group" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>group</h2>\n<p>Specifies where the component appears in the Mannequin UI. You can use whatever groupings you like - Mannequin does not require any organization system. You can also specify a nested group using the <code>></code> character.</p>\n<div class="gatsby-highlight">\n      <pre class="language-twig"><code><span class="token other">{# @Component\ngroup: Atoms\n# or... \ngroup: Molecules>Containers</span>\n</code></pre>\n      </div>\n<h2 id="samples"><a href="#samples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>samples</h2>\n<p>Samples are named sets of variables you can view in the Mannequin UI.  Samples provide examples of how the component will look in the real world.  Samples are named.  Eg: the following example has two samples, "Small", and "Large."</p>\n<div class="gatsby-highlight">\n      <pre class="language-twig"><code><span class="token comment">{# @Component\n... \nsamples:\n    Small:\n      classes: [\'small\']\n    Large:\n      classes: [\'large\']\n#}</span>\n<span class="token other">&lt;div class="</span><span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">classes</span><span class="token operator">|</span><span class="token property">join</span><span class="token punctuation">(</span><span class="token string"><span class="token punctuation">\'</span> <span class="token punctuation">\'</span></span><span class="token punctuation">)</span> <span class="token rd"><span class="token punctuation">}}</span></span></span><span class="token other">">\n  ... \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>\n</code></pre>\n      </div>\n<p>The variables that samples contain are passed to your Twig templates verbatim.  They can be simple, like strings and integers, or they can be complex, as in the above example where the <code>classes</code> variable is an array. Finally, sample variables can be dynamic using <a href="/extensions/drupal/expressions/">expressions</a></p>\n<h3 id="default-variables"><a href="#default-variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Default Variables</h3>\n<p> The following default are provided with default values for every template.  They can be overridden by specifying them in a sample declaration:</p>\n<ul>\n<li><code>attributes</code>: An empty <code>Attribute</code> object.</li>\n<li><code>title_attributes</code>: An empty <code>Attribute</code> object.</li>\n<li><code>title_prefix</code>: An empty array</li>\n<li><code>title_suffix</code>: An empty array.</li>\n<li><code>db_is_active</code>: true</li>\n<li><code>is_admin</code>: false</li>\n<li><code>logged_in</code>: false</li>\n</ul>\n<h3 id="render-arrays"><a href="#render-arrays" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Render Arrays</h3>\n<p>Mannequin does not support Drupal\'s Render system.  However, it does support rendering arrays by concatenating the values.  For example, see the following simplified <code>node.html.twig</code> template:</p>\n<div class="gatsby-highlight">\n      <pre class="language-twig"><code><span class="token comment">{# @Component\nname: Node\nsamples:\n  Article:\n    content:\n      field_image: ~markup(\'&lt;img src="http://placehold.it/350/350" />\')\n      field_body: ~markup(\'&lt;p>Lorem ipsum...&lt;/p>\')\n#}</span>\n<span class="token other"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>\n    <span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">content</span> <span class="token rd"><span class="token punctuation">}}</span></span></span>\n  <span class="token other"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>\n</code></pre>\n      </div>\n<p>In this example, the <code>content</code> variable will concatenate the value of field<em>image and field</em>body, which is pretty close to what Drupal\'s render system does.  This is particularly powerful when combined with the <a href="/extensions/drupal/expressions/#sample">sample</a> expression to render values from your actual field templates.</p>',headings:[{value:"name",depth:2},{value:"description",depth:2},{value:"group",depth:2},{value:"samples",depth:2},{value:"Default Variables",depth:3},{value:"Render Arrays",depth:3}],frontmatter:{title:"Components",description:"Reference information for Drupal Twig components and metadata."},fields:{ghEditUrl:"https://github.com/LastCallMedia/Mannequin/edit/master/src/Drupal/docs/components.md",extension:"Drupal"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/extensions/drupal/",menuTitle:"Overview"},frontmatter:{title:"Drupal"},id:"/home/gabriele/Mannequin/src/Drupal/README.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/components/",menuTitle:"Components"},frontmatter:{title:"Components"},id:"/home/gabriele/Mannequin/src/Drupal/docs/components.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/configuration/",menuTitle:"Configuration"},frontmatter:{title:"Configuration"},id:"/home/gabriele/Mannequin/src/Drupal/docs/configuration.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/expressions/",menuTitle:"Expressions"},frontmatter:{title:"Expressions"},id:"/home/gabriele/Mannequin/src/Drupal/docs/expressions.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/cli/",menuTitle:"CLI"},frontmatter:{title:"CLI"},id:"/home/gabriele/Mannequin/src/Drupal/docs/cli.md absPath of file >>> MarkdownRemark"}},{node:{fields:{slug:"/extensions/drupal/support/",menuTitle:"FAQ & Support"},frontmatter:{title:"FAQ & Support"},id:"/home/gabriele/Mannequin/src/Drupal/docs/support.md absPath of file >>> MarkdownRemark"}}]}},pathContext:{id:"/home/gabriele/Mannequin/src/Drupal/docs/components.md absPath of file >>> MarkdownRemark",extension:"Drupal"}}}});
//# sourceMappingURL=path---extensions-drupal-components-453c4563e85d475b9621.js.map