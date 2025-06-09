import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';

export const fetchData = async () => {
  try {
    const res = await fetch('/semester.json');
    const data = await res.json();
    return { success: true, data: data, message: "Fetched Successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const removeLastPage = ()=>{
  // ............
}

export const downloadWithH2PDF = async(node)=>{
  try {
    const res = await html2canvas(node);
    const url = res.toDataURL("image/png");

    const link = document.createElement('a');
    link.href = url;
    link.download = "coverPage.png";
    link.click();
  } catch (error) {
    console.log("Error occured:" , error.message);
    console.error(error);
  }
}

export const downloadPDF = async(node) => {

  const opt = {
    margin:0,
    filename:'coverPage.pdf',
    image:{ type: 'png', quality: 1 },
    html2canvas: {scale: 2 , scrollY: 0},
    jsPDF:{ unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf().set(opt).from(node).save();
};
