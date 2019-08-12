---
path: "/manual"
date: "2019-05-04"
title: "คู่มือการใช้งานระบบ Pedigree Mate"
---

<div style="text-align:center">
    <img width="60%" src="desktop-screenshot.png"/>
</div>

**Pedigree Mate** เป็นเครื่องมือที่ช่วยด้านการจัดการผสมพันธุ์สัตว์ วัตถุประสงค์คือ การเลือกสัตว์เข้าผสมพันธ์ุ โดยหลีกเลี่ยงมิให้พ่อพันธุ์ แม่พันธุ์ มีพันธุ์ประวัติซ้ำกัน ตัวระบบสามารถเทียบพันธุ์ประวัติย้อนหลังได้ถึง 3 รุ่น ใช้งานง่าย, รวดเร็ว, และแม่นยำ

## ขั้นตอนการใช้งาน

1. สร้างไฟล์ Pedigree ในรูปแบบของไฟล์ CSV (Comma-Separated Value) ซึ่งมีโครงสร้างดังรูปภาพด้านล่าง
<div style="text-align:center">
    <img width="60%" src="sample-csv.png"/>
</div>

โดยคอลัมน์ **S** และ **D** นั้น คือรหัสของบรรพบุรษตามโครงสร้างของสายเลือดดังภาพด้านล่าง
<div style="text-align:center">
    <img width="40%" src="pedigree-structure.png"/>
</div>

1. คลิ๊กปุ่ม **Choose File** แล้วเลือกไฟล์ Pedigree ที่เตรียมไว้
2. เมื่อเลือกเสร็จ จะปรากฏผลลัพธ์ทันที โดยผลลัพท์สามารถเลือก Pedigree ที่ซ้ำกันได้ในหลายระดับ โดยเลือกที่ <img style="vertical-align: middle" src="selector.png" width="120px"/>
   

## การแปลผลลัพธ์

- **ด้านซ้าย** คือ ID หรือ รหัสของพ่อพันธุ์
- **ด้านขวา** ที่อยู่กรอบสี่เหลี่ยม คือ รหัสของแม่พันธุ์ที่มีประวัติของบรรพบุรุษซ้ำกับพ่อพันธุ​์ด้านซ้าย

<div style="text-align:center">
    <img width="60%" src="sample-result.png"/>
</div>
