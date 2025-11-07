// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {sectionNum: 1,
    roomNum: "STC 353",
    enrolled: 26,
    days: "TTh",
    instructor: "Bro T"
    }

    ,{ sectionNum: 2, 
        roomNum: 'STC 347', 
        enrolled: 28, 
        days: 'TTh', 
        instructor: 'Sis A'
    }
  ],
  enrollStudent: function(SectionNum) {
    console.log('sectionNum to enroll in:', SectionNum);
    const theSection = sections.find((section)=> SectionNum === section.sectionNum);
  }

};
theSection.enrolled++;

function findSection(section) {
  return sectionNum = section.sectionNum;
}

const key = 'code';
aCourse.key
aCourse.name
aCourse['course code']
aCourse[key]

function CourseInfo(course) {
    const courseName = document.querySelector('#courseName');
    const courseCode = document.querySelector('#courseCode');
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function displayCourseInfo(_section) {
    return `<tr>
    \<td>Section Number: ${sectionNum}</td>
    <td>Room Number: ${roomNum}</td>
    <td>Enrolled Students: ${enrolled}</td>
    <td>Days: ${days}</td>
    <td>Instructor: ${instructor}</td>
    </tr>`;
}

function renderSelections(sections) {
    const sectionTable = document.querySelector('#sections');
    const html = sections.map(displayCourseInfo);
    sectionsEl.innerHTML = html.join('\n');
}

displayCourseInfo(aCourse);
renderSelections(aCourse.sections);
aCourse.enrollStudent(1);

document.querySelector('#enrollStudent').addEventListener('click', aCourse.enrollStudent);
 const sectionInput = document.querySelector('#sectionNum')
 aCourse.enrollStudent(sectionInput.value);

 enrollStudent: function(sectionNum) {
    console.log('sectionNum to enroll in:', sectionNum);
    const theSection = this.sections.find((section)=> sectionNum === section.sectionNum);
    theSection.enrolled++;
 }