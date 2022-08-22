const fs = require("fs")
const { Document, 
        Packer, 
        Paragraph, 
        TextRun, 
        SectionType, 
        HeadingLevel, 
        ShadingType, 
        AlignmentType, 
        thematicBreak, 
        PageBreak, 
        UnderlineType,
        Header,
        Footer,
        TableCell,
        TableRow,
        Table,
        WidthType
    } = require("docx");


    const table = new Table({
        columnWidths: [3505, 5505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph("Hello")],
                    }),
                    new TableCell({
                        width: {
                            size: 5505,
                            type: WidthType.DXA,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 5505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph("World")],
                    }),
                ],
            }),
        ],
    });

function createDocx(json) {
    const doc = new Document({
        background: {
            color: "696969"
        },
        sections: [
            {
                properties: {
                    type: SectionType.CONTINUOUS,
                },
                headers:{
                    default: new Header({
                        children: [
                            new Paragraph("Header text"),
                        ],
                    }),
                },
                footers:{
                    default: new Footer({
                        children: [new Paragraph("Footer text")],
                    }),
                },
                children: [
                    
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Hello World"
                            }),
                            new PageBreak(),
                            new TextRun({
                                text: JSON.stringify(json),
                                bold: true,
                            }),
                            new TextRun({
                                text: "\tGithub is the best",
                                bold: true,
                            }),
                        ],
                        heading: HeadingLevel.HEADING_1,
                        border: {
                            top: {
                                color: "auto",
                                space: 1,
                                style: "single",
                                size: 6,
                            },
                            bottom: {
                                color: "auto",
                                space: 1,
                                style: "single",
                                size: 6,
                            },
                        },
                        shading: {
                            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                            color: "00FFFF",
                            fill: "FF0000",
                        },
                    }),
                ],
            },
            {
                properties: {
                    type: SectionType.NEXT_PAGE,
                },
                children: [
                    new Paragraph({
                        children: [
                            new TextRun("Hello World"),
                            new TextRun({
                                text: JSON.stringify(json),
                                bold: true,
                                italics: true,
                            }),
                            new TextRun({
                                text: "\tGithub is the best",
                                bold: true,
                                underline: {
                                    type: UnderlineType.DOUBLE,
                                    color: "990011",
                                },
                                emphasisMark: {},
                                superScript: true,
                            }),
                        ],
                        widowControl: true,
                        spacing: {
                            after: 400,
                            before: 400,
                        },
                        outlineLevel: 0,
                        alignment: AlignmentType.CENTER,
                        thematicBreak: true,
                    }),
                    new Paragraph({
                        text: "Are awesome",
                        bullet: {
                            level: 0
                        },
                    }),
                    table
                    
                ],
            },
        ],

    });

    // Used to export the file into a .docx file
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });
}

module.exports = {
    createDocx
}