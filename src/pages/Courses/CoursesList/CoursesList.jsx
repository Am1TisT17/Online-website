import React, { useState, useMemo } from 'react';
import './Courseslist.scss';
import coursesData from './Courseslist.js';
import watch from '../../../assets/img/Courseslist/watch.svg';
import fileIcon from '../../../assets/img/Courseslist/file.svg';
import lvlIcon from '../../../assets/img/Courseslist/lvl.svg';
import pplIcon from '../../../assets/img/Courseslist/ppl.svg';
import findIcon from '../../../assets/img/Courseslist/find.svg';
import gridIcon from '../../../assets/img/Courseslist/grid.svg';
import listIcon from '../../../assets/img/Courseslist/list.svg';

const categories = ['Design', 'Development', 'Data Science', 'Photography'];
const prices = ['Free', 'Paid'];
const durations = ['Short', 'Long'];
const instructors = ['Max Aleksei'];

export default function CoursesList() {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedInstructors, setSelectedInstructors] = useState([]);
  const [page, setPage] = useState(1);
  const [view, setView] = useState('list'); // 'list' | 'grid'
  const [sort, setSort] = useState('default');

  const COURSES_PER_PAGE = view === 'grid' ? 6 : 5;

  const filteredCourses = useMemo(() => {
    let arr = coursesData.filter(course => {
      const matchSearch = course.title.toLowerCase().includes(search.toLowerCase()) || course.desc.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selectedCategories.filter(cat => categories.includes(cat)).length === 0 || selectedCategories.includes(course.category);
      const matchPrice = selectedPrices.length === 0 || selectedPrices.includes(course.price);
      const matchDuration = selectedDurations.length === 0 || selectedDurations.includes(course.durationType);
      const matchInstructor = selectedInstructors.length === 0 || selectedInstructors.includes(course.instructor);
      return matchSearch && matchCategory && matchPrice && matchDuration && matchInstructor;
    });
    if (sort === 'name') arr = arr.slice().sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'rating') arr = arr.slice().sort((a, b) => b.rating - a.rating);
    if (sort === 'price') arr = arr.slice().sort((a, b) => (a.price === 'Free' ? -1 : 1));
    return arr;
  }, [search, selectedCategories, selectedPrices, selectedDurations, selectedInstructors, sort]);

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const pagedCourses = filteredCourses.slice((page - 1) * COURSES_PER_PAGE, page * COURSES_PER_PAGE);

  const handleCheckbox = (value, selected, setSelected) => {
    setSelected(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    setPage(1);
  };

  const handleView = (v) => setView(v);

  return (
    <div className="courses-list-page">
      <aside className="courses-list-filters">
        <div className="courses-list-search-row">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search Product..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="courses-list-search"
            />
            <img src={findIcon} alt="find" className="courses-list-search-icon-inside" />
          </div>
        </div>
        <div className="courses-list-filter-group">
          <h4>Category</h4>
          {['Beginner', 'Intermediate', 'Advanced'].map(level => (
            <label key={level} className={`filter-checkbox-label filter-level-checkbox`}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(level)}
                onChange={() => handleCheckbox(level, selectedCategories, setSelectedCategories)}
              />
              {level}
            </label>
          ))}
          {(selectedCategories.some(level => ['Beginner', 'Intermediate', 'Advanced'].includes(level))) && (
            <div className="category-subfilters">
              <div className="category-subfilters-title">Choose direction</div>
              {categories.map(cat => (
                <label key={cat} className="filter-checkbox-label filter-category-subfilter">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCheckbox(cat, selectedCategories, setSelectedCategories)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="filter-divider" />
        <div className="courses-list-filter-group">
          <h4>Price Level</h4>
          {prices.map(price => (
            <label key={price} className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={selectedPrices.includes(price)}
                onChange={() => handleCheckbox(price, selectedPrices, setSelectedPrices)}
              />
              {price}
            </label>
          ))}
        </div>
        <div className="courses-list-filter-group">
          <h4>Time Duration</h4>
          {durations.map(dur => (
            <label key={dur} className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={selectedDurations.includes(dur)}
                onChange={() => handleCheckbox(dur, selectedDurations, setSelectedDurations)}
              />
              {dur}
            </label>
          ))}
        </div>
        <div className="courses-list-filter-group">
          <h4>Our Instructor</h4>
          {instructors.map(inst => (
            <label key={inst} className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={selectedInstructors.includes(inst)}
                onChange={() => handleCheckbox(inst, selectedInstructors, setSelectedInstructors)}
              />
              {inst}
            </label>
          ))}
        </div>
      </aside>
      <main className="courses-list-main">
        <div className="courses-list-header">
          <span>Showing {filteredCourses.length} courses of {coursesData.length} Result</span>
          <div className="courses-list-view-switch">
            <img src={gridIcon} alt="grid" className={view === 'grid' ? 'active' : ''} onClick={() => handleView('grid')} />
            <img src={listIcon} alt="list" className={view === 'list' ? 'active' : ''} onClick={() => handleView('list')} />
          </div>
        </div>
        <div className={`courses-list-cards${view === 'grid' ? ' grid' : ''}`}>
          {pagedCourses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-card__img-wrap">
                <img src={course.img} alt="course" className="course-card__img" />
                <span className="course-card__duration">
                  <img src={watch} alt="watch" className="course-card__watch" />
                  {course.duration}
                </span>
              </div>
              <div className="course-card__body">
                <div className="course-card__toprow">
                  <div className="course-card__rating">
                    <span>★</span>
                    <p><span>{course.rating}</span></p>
                  </div>
                  <span className={`course-card__price${course.price === 'Free' ? ' free' : ''}`}>{course.price}</span>
                </div>
                <h3 className="course-card__title">{course.title}</h3>
                <div className="course-card__desc">{course.desc}</div>
                <div className="course-card__meta">
                  <span><span className="meta-icon-bg"><img src={fileIcon} alt="file" /></span> Lesson {course.lessons}</span>
                  <span><span className="meta-icon-bg"><img src={pplIcon} alt="students" /></span> Students {course.students}</span>
                  <span><span className="meta-icon-bg"><img src={lvlIcon} alt="level" /></span> {course.level}</span>
                </div>
                {view === 'list' && <div className="course-card__line-sep" />}
                <div className="course-card__footer">
                  <img src={course.ava} alt="ava" className="course-card__ava" />
                  <span className="course-card__author">{course.author}</span>
                  <span className="course-card__view-details-link">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="courses-list-pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i+1}
                className={page === i+1 ? 'active' : ''}
                onClick={() => setPage(i+1)}
              >
                {i+1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
