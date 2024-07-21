// src/cms/cms.js
import CMS from 'netlify-cms';
import { CustomMarkdownEditorControl, CustomMarkdownEditorPreview } from '../_includes/customMarkdownEditor';

CMS.registerWidget('customMarkdownEditor', CustomMarkdownEditorControl, CustomMarkdownEditorPreview);