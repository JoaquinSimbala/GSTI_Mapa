import React, { useState } from 'react';
import {
  Search,
  Compass,
  Layers,
  RotateCcw,
  TrendingUp,
  RotateCw,
  Headset,
  ShieldAlert
} from 'lucide-react';
import { CONCEPT_DETAILS } from '../data/mapData';

interface HeaderNavProps {
  activeFilter: string;
  onFilterChange: (branch: string) => void;
  onSearchSelect: (nodeId: string) => void;
  onStartTour: () => void;
  onResetView: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeFilter,
  onFilterChange,
  onSearchSelect,
  onStartTour,
  onResetView
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'Todo el Mapa', icon: Layers, color: '#4f46e5' },
    { id: 'fundamentos', label: '1. Fundamentos', icon: TrendingUp, color: '#059669' },
    { id: 'pdca', label: '2. Ciclo PDCA', icon: RotateCw, color: '#d97706' },
    { id: 'servicedesk', label: '3. Service Desk', icon: Headset, color: '#2563eb' },
    { id: 'seguridad', label: '4. Ciberseguridad', icon: ShieldAlert, color: '#7c3aed' }
  ];

  const searchResults = Object.values(CONCEPT_DETAILS).filter((item) => {
    if (!searchTerm.trim()) return false;
    const term = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(term)) ||
      item.shortDesc.toLowerCase().includes(term) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(term)))
    );
  });

  return (
    <header className="main-header">
      <div className="header-card">
        {/* Brand & Titles */}
        <div className="header-brand">
          <div className="header-titles">
            <h1 className="header-title">
              MEJORA CONTINUA DEL SERVICIO DE TI
            </h1>
            <p className="header-subtitle">
              Marcos normativos, ciclo PDCA, gestión de cambios y ciberseguridad aplicada al Service Desk
            </p>
          </div>
        </div>

        {/* Filter Branches Pills (Scrollable horizontally on mobile) */}
        <div className="header-filters">
          {filterOptions.map((opt) => {
            const isActive = activeFilter === opt.id;
            const IconComp = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => onFilterChange(opt.id)}
                className={`filter-btn ${isActive ? 'filter-btn-active' : ''}`}
                style={{
                  background: isActive ? opt.color : 'transparent',
                  color: isActive ? '#ffffff' : '#475569'
                }}
              >
                <IconComp size={13} />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search & Action Buttons */}
        <div className="header-actions">
          {/* Live Search Input */}
          <div className="search-container">
            <div className="search-box">
              <Search size={14} color="#64748b" className="search-icon" />
              <input
                type="text"
                placeholder="Buscar tema, norma ISO..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="search-input"
              />
            </div>

            {/* Dropdown Results */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="search-dropdown">
                {searchResults.map((item) => (
                  <div
                    key={item.id}
                    onMouseDown={() => {
                      onSearchSelect(item.id);
                      setSearchTerm('');
                    }}
                    className="hover-search-item search-dropdown-item"
                  >
                    <div className="search-item-title">{item.title}</div>
                    <div className="search-item-branch">{item.branchLabel}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tour Guiado Button */}
          <button
            onClick={onStartTour}
            title="Iniciar recorrido guiado interactivo"
            className="action-btn tour-btn"
          >
            <Compass size={14} />
            <span className="btn-label">Tour Guiado</span>
          </button>

          {/* Reset View Button */}
          <button
            onClick={onResetView}
            title="Centrar y reajustar vista del mapa"
            className="action-btn reset-btn"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};
