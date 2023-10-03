/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Oloyede Olatunde <https://github.com/sirtuns4real>
 * @returns
 */
export default function getListStudentIds(students) {
    if (students instanceof Array) {
      return students.map((student) => student.id);
    }
    return [];
  }
