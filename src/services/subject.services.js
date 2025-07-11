import html2canvas from 'html2canvas';

export const fetchData = async (field="bit") => {
  try {
    const res = await fetch(`/${field.toLocaleLowerCase()}.json`);
    const data = await res.json();
    return { success: true, data: data, message: "Fetched Successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};


export const downloadWithH2PDF = async(node , obj)=>{
  try {
    const res = await html2canvas(node);
    const url = res.toDataURL("image/png");

    const link = document.createElement('a');
    link.href = url;
    link.download = `${obj.studentName}_${obj.subject}.png`;
    link.click();
  } catch (error) {
    console.log("Error occured:" , error.message);
    console.error(error);
  }
}