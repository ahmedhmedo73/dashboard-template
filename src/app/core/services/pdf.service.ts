import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  generatedPdf: any;
  pdfName: any;

  constructor() {}

  async printingPDF(elementId: string, pdfName: string) {
    let DATA: any = document.getElementById(elementId);
    this.pdfName = pdfName;

    const canvas = await html2canvas(DATA);
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    heightLeft -= pageHeight;
    this.generatedPdf = new jsPDF('p', 'mm');
    this.generatedPdf.addImage(
      canvas,
      'PNG',
      0,
      position,
      imgWidth,
      imgHeight,
      '',
      'FAST'
    );
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      this.generatedPdf.addPage();
      this.generatedPdf.addImage(
        canvas,
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight,
        '',
        'FAST'
      );
      heightLeft -= pageHeight;
    }
    return this.pdfToFile(this.generatedPdf, pdfName);
  }
  pdfToFile(doc: jsPDF, pdfName: string): File {
    const pdfData = doc.output('arraybuffer');
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    return new File([blob], pdfName + '.pdf', {
      type: 'application/pdf',
    });
  }
  downloadPDF() {
    this.generatedPdf.save(this.pdfName);
  }
}
