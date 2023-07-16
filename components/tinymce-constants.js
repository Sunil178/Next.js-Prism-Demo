export const TinyOptions = {
    plugins: [ "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
        "anchor", "searchreplace", "visualblocks", "visualchars", "code", "fullscreen",
        "insertdatetime", "media", "table", "code", "help", "wordcount", "codesample",
        "autoresize", "autosave", "emoticons", "quickbars",
    ],
    toolbar1: "undo redo | blocks | " +
        "bold italic forecolor | alignleft aligncenter " +
        "alignright alignjustify | bullist numlist outdent indent | submit",
    toolbar2: "emoticons | removeformat | codesample | restoredraft | help | fullscreen | hr | image | table | searchreplace",
    codesample_languages: [
        {text: 'HTML/XML', value: 'markup'},
        {text: 'JavaScript', value: 'javascript'},
        {text: 'CSS', value: 'css'},
        {text: 'PHP', value: 'php'},
        {text: 'Ruby', value: 'ruby'},
        {text: 'Python', value: 'python'},
        {text: 'Java', value: 'java'},
        {text: 'C', value: 'c'},
        {text: 'C#', value: 'csharp'},
        {text: 'C++', value: 'cpp'},
        {text: 'Bash', value: 'bash'},
        {text: 'Perl', value: 'perl'},
    ],
    text_patterns: [
        {start: '*', end: '*', format: 'italic'},
        {start: '**', end: '**', format: 'bold'},
        {start: '#', format: 'h1'},
        {start: '##', format: 'h2'},
        {start: '###', format: 'h3'},
        {start: '####', format: 'h4'},
        {start: '#####', format: 'h5'},
        {start: '######', format: 'h6'},
        {start: '1. ', cmd: 'InsertOrderedList'},
        {start: '* ', cmd: 'InsertUnorderedList'},
        {start: '- ', cmd: 'InsertUnorderedList'},
        {start: '//brb', replacement: 'Be Right Back'}
    ],
}