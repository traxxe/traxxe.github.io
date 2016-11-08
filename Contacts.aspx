<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Contacts.aspx.cs" Inherits="Nerd.Contacts" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0.js"></script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="Contacts.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <p>
            By <span data-bind="text: authorName"></span>
            (<a data-bind="attr: { href: twitterUrl }, text: twitterAlias"></a>)
        </p>
        <p>
            Author Name: <input type="text" data-bind="textInput: authorName" />
        </p>
        <p>
            <button data-bind="click: capitalizeTwitterAlias">Capitalize</button>
        </p>
    </div>
    </form>
</body>
</html>
