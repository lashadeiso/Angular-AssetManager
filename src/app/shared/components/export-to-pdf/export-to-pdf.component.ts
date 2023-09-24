import { Component, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-export-to-pdf',
  templateUrl: './export-to-pdf.component.html',
  styleUrls: ['./export-to-pdf.component.scss'],
})
export class ExportToPdfComponent {
  constructor(private elementRef: ElementRef) {}

  public openPDF(): void {
    const tempDiv = document.createElement('div');

    tempDiv.innerHTML = `<body data-gr-ext-installed="" data-new-gr-c-s-check-loaded="14.1126.0" data-new-gr-c-s-loaded="14.1126.0" spellcheck="false">
    <p style="margin:0in;"><br></p>
    <table style="width:481.5pt;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width:87.85pt;border:none;border-bottom:solid #ABBAF7 3.0pt;padding:0in 5.4pt 0in 5.4pt;height:1.0in;">
                    <p style="text-align:center;">&nbsp;<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAABcCAMAAAB6K/auAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAACBQ7yBI5yBK6iBI6yBJ7CBI6iBJ6yBI6yJJ7SJK7CJJ7CFJ7CFJ7SFJ7CFJ7CFJ7JYCBmUAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAAEgElEQVRoQ+2Z27azKgyFi0csKn3/p/2xREkgAVy19mLv767CqJOcCPj4n89RnZ6X1Uwd/P4B3fIClhYe3YyaLCjY0PD0VtQMbwcWeH4nGt59MMHAfXTYEZ4LY0J14/TUg4KfPOoIx8AKYwJqGCeta1JIjfsC5wYecfQwiTDAIEdr9v8tRm9rYObGCA8ZJphCeMIgw7Eyx5JbHJ3qWESHYKkHYmqoaHrOYE0caAYGElaYQLAwmJBYLRO+Uco7ehiJYUJSDso0eOTwHWEGwgreSNU6BF9wOSSGGmdgYTIbk4LnmKWJbmPzTZjMzhUcx8avEJac3teLd4ZibCb5DYYpQpV4wjBFSOYOhhGCGRoYpgh+4zVIaZRYWKpQCsYpggY2ziQ7JNEueULQIOyybDyIdSey2yyW1Edc+N4I8cAKFiulI+zfNld9WR9L+ydX/KRC6RnM+rLLPMpGcDDhK28tTATnzFANUyDkNiKJSntJb6SSiMj1fbE3Mh3EGeKquuZ8Rzd6m5fQtL3r+ubFmKfuC30J/KMn26E50Ozs1E7HNjO5yESLK6xsQ+n3VmAzwa66iUshJyOToqNXsUwFIwCqaRt5TSBSIBdtTddmk7iani17AZuvKFfAb/CEz0/hqu1duGs9dJzjkq6Xgd1ilPvfUWs9DgWJLtjJO0xyLKowQ1pVVD+v+H/Xp3CKU2m2vaFxzJTdFLInqpGuC5jTFGrIZQIFT8+lxMEMk7eFsQI8dHX0OiNlOVxyTkO4qOFBicwdACL2hDuloRw8YQtPrjNS9k7tjIY2b9w3e/imWysDxNkZDVXxC2tr4WcWaGa8BruYaXSZ3rWuqLvK3vX9oPU0g0LQUKUXIq0q56HwGPfyXNFvXCGavV7+XBEDzqgIB4efe4I6DeDjGg32fGOp+DNTRK2GRf9xz+0LdcdRpcHqj/rarrDCsgY793+zAKZnL0yAkoaCCVxStltauhRtMn2Xo5WXmddgpYZSuf7CLGQ33lhd3mq26diQCkBOA6+gHafMRugxz5E1H69C1sApaMe5pqh7DOdGbrGihvRk0fINTo417eLJLbBH0LDEnbFrhWDoJOkZZYg3EVZD7IZsK1QmOfZE52pOQ2SErlzpikQ+oV8+GA30SqfUi9ViaOeIoyLRQI+jVynYoCpQmsYayDGNieGPeGIV4Xoo0mDRgabUaf8FeN2bo9ekGvDnlSvdEAhHBNfhwBuIBvTN5htG8CBTwIECa1iDFa6OBAwytheBNKALOObL5YWguH+f4YMGNBJ9VruekP/boSJoCBJ8cHyVEBQuRQ8Nx9mzrhf+lNCjT4eGkBK3SMAiFtAQ2p6qE9cVBMODhsMKt0mQv/SWbv0uhbYIO1VXAJdhyUa688XqyHFcGCFuDAZPfIMIhfNeEm/wHxa/SvxB9AdmSAxxU4Gk0HuVunubyyGGuGG35Ag7qKPqGu968FcG7kvsLaBt4/b6tIOccXOZDqDM+FE44ICourD+Dkf79LOQREE5wIMfcGyeP0sLlBij/RmkUv63eTz+AfFusSex2qfHAAAAAElFTkSuQmCC" style="width: 71px; height: 71px;" alt="image"></p>
                </td>
                <td style="width:393.65pt;border:none;border-bottom:solid #ABBAF7 3.0pt;padding:0in 5.4pt 0in 5.4pt;height:1.0in;">
                    <p style="text-align:center;">Balsam Elementary</p>
                    <p style="text-align:center;">pTA meeting - charity auction PLANning</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p>&nbsp;</p>
    <table style="width:481.25pt;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width:69.1pt;border:solid #748DF3 1.0pt;background:#E3E8FC;padding:0in 5.4pt 0in 5.4pt;height:.4in;">
                    <h1 style="text-align:center;">Date</h1>
                </td>
                <td style="width:80.25pt;border:solid #748DF3 1.0pt;border-left:none;padding:0in 5.4pt 0in 5.4pt;height:.4in;">
                    <p style="text-align:center;">March 14th</p>
                </td>
                <td style="width:69.1pt;border:solid #748DF3 1.0pt;border-left:none;background:#E3E8FC;padding:0in 5.4pt 0in 5.4pt;height:.4in;">
                    <h1 style="text-align:center;">Time</h1>
                </td>
                <td style="width:80.25pt;border:solid #748DF3 1.0pt;border-left:none;padding:0in 5.4pt 0in 5.4pt;height:.4in;">
                    <p style="text-align:center;">11:30 AM</p>
                </td>
                <td style="width:83.8pt;border:solid #748DF3 1.0pt;border-left:none;background:#E3E8FC;padding:0in 5.4pt 0in 5.4pt;height:.4in;">
                    <h1 style="text-align:center;">Facilitator</h1>
                </td>
                <td style="width:98.75pt;border:solid #748DF3 1.0pt;border-left:none;padding:0in 5.4pt 0in 5.4pt;height:.4in;">
                    <p style="text-align:center;">Graham Barnes</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p>&nbsp;</p>
    <table style="border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td colspan="4" style="width:481.25pt;border:solid #748DF3 1.0pt;background:#E3E8FC;padding:0in 5.4pt 0in 5.4pt;height:.4in;">
                    <h1 style="text-align:center;">PTA MEMBERS</h1>
                </td>
            </tr>
            <tr>
                <td style="width:120.3pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Takuma Hayashi</p>
                </td>
                <td style="width:120.3pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Mirjam Nilsson</p>
                </td>
                <td style="width:120.3pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Flora Berggren</p>
                </td>
                <td style="width:120.35pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Rajesh Santoshi</p>
                </td>
            </tr>
            <tr>
                <td style="width:120.3pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Graham Barnes</p>
                </td>
                <td style="width:120.3pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Rowan Murphy</p>
                </td>
                <td style="width:120.3pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Elizabeth Moore</p>
                </td>
                <td style="width:120.35pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Robin Kline</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p>&nbsp;</p>
    <table summary="Agenda items table" style="width: 100%;border-collapse:collapse;border:none;">
        <thead>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;background:#E3E8FC;padding:0in 5.4pt 0in 5.4pt;height:.4in;">
                    <h1 style="text-align:center;">Time</h1>
                </td>
                <td style="width:341.9pt;border:solid #748DF3 1.0pt;border-left:none;background:#E3E8FC;padding:0in 5.75pt 0in .2in;height:.4in;">
                    <p><span style="font-size:13px;line-height:110%;">Item</span></p>
                </td>
                <td style="width:1.25in;border:solid #748DF3 1.0pt;border-left:none;background:#E3E8FC;padding:0in 5.4pt 0in 5.4pt;height:.4in;">
                    <p style="text-align:center;"><span style="font-size:13px;line-height:110%;">Owner</span></p>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">11:30</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:.35in;">
                    <p>Welcome</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Graham Barnes</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">11:35</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:.35in;">
                    <p>Old business and approval of last meeting&rsquo;s minutes</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Graham Barnes</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">11:50</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:.35in;">
                    <p>Vote on final charity auction items</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Graham Barnes</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">12:00</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:.35in;">
                    <p>Discuss openings on advisory committees - any response from newsletter?</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Mirjam Nilsson</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">12:15</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:.35in;">
                    <p>Vote on proposed budget</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Mirjam Nilsson</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">12:20</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:.35in;">
                    <p>Principal&apos;s report</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Flora Berggren</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">12:30</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:.35in;">
                    <p>Break</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">&nbsp;</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:55.15pt;">
                    <p style="text-align:center;">12:40</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:55.15pt;">
                    <p>New Business<br>&nbsp;A. Charity auction event planning<br>&nbsp;B. Parent Education Programs<br>&nbsp;C. Teacher grants application process</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:55.15pt;">
                    <p style="text-align:center;">Graham Barnes</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:65.2pt;">
                    <p style="text-align:center;">1:00</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:65.2pt;">
                    <p>Committee Reports<br>&nbsp;A. Membership<br>&nbsp;B. Volunteers<br>&nbsp;C. Newsletter<br>&nbsp;D. Parent support</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:65.2pt;">
                    <p style="text-align:center;">Rajesh Santoshi</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">1:20</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:.35in;">
                    <p>Announcements</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">Takuma Hayashi</p>
                </td>
            </tr>
            <tr>
                <td style="width:72.1pt;border:solid #748DF3 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">1:30</p>
                </td>
                <td style="width:341.9pt;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.75pt 0in .2in;height:.35in;">
                    <p>Adjournment</p>
                </td>
                <td style="width:1.25in;border-top:none;border-left:none;border-bottom:solid #748DF3 1.0pt;border-right:solid #748DF3 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:.35in;">
                    <p style="text-align:center;">&nbsp;</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p>&nbsp;</p>
</body>`;

    // Append the temporary div to the component's native element
    this.elementRef.nativeElement.appendChild(tempDiv);

    // Use html2canvas to capture the temporary div
    html2canvas(tempDiv, { scale: 1.5 }).then((canvas) => {
      const fileWidth = 200; // Adjust width for landscape
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4'); // 'l' for landscape
      const xPosition = (PDF.internal.pageSize.getWidth() - fileWidth) / 2;
      const yPosition = (PDF.internal.pageSize.getHeight() - fileHeight) / 2;

      PDF.addImage(FILEURI, 'PNG', xPosition, yPosition, fileWidth, fileHeight);

      // Open the PDF in a new tab
      const blobURL = PDF.output('bloburl');
      window.open(blobURL, '_blank');

      // Remove the temporary div from the DOM
    });
    this.elementRef.nativeElement.removeChild(tempDiv);
  }
}
